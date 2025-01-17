import { Component, ViewChild, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import {
  AlertController,
  IonList,
  IonRouterOutlet,
  LoadingController,
  ModalController,
  ToastController,
  Config,
  IonModal,
} from "@ionic/angular";

import { TradeFilterPage } from "../trade-filter/trade-filter";
import { ConferenceData } from "../../providers/conference-data";
import { UserData } from "../../providers/user-data";

import { OverlayEventDetail } from "@ionic/core/components";
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { WsService } from "../../services/ws.service";
import { Subscription } from "rxjs";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "page-trades",
  templateUrl: "trades.html",
  styleUrls: ["./trades.scss"],
})
export class TradesPage implements OnInit, OnDestroy {
  @ViewChild(IonModal) modal: IonModal;

  // Gets a reference to the list element
  @ViewChild("scheduleList", { static: true }) scheduleList: IonList;

  ios: boolean;
  dayIndex = 0;
  queryText = "";
  segment = "all";
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;
  showSearchbar: boolean;

  submitted = false;
  order: FormGroup;
  private positionsSub: Subscription;
  orders: any[];
  positions: any[];
  symbols: any[] = [];

  public actionSheetButtons = [
    {
      text: 'Delete All Orders',
      data: {
        action: 'delete',
      },
      handler: () => {
        this.deleteAllOrders();
      }
    },
    {
      text: 'Delete Limit Orders',
      data: {
        action: 'delete',
      },
      handler: () => {
        this.deleteLimitOrders();
      }
    },
    {
      text: 'Delete Stop Orders',
      data: {
        action: 'delete',
      },
      handler: () => {
        this.deleteStopOrders();
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];


  constructor(
    private fb: FormBuilder,
    public alertCtrl: AlertController,
    public confData: ConferenceData,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public routerOutlet: IonRouterOutlet,
    public toastCtrl: ToastController,
    public user: UserData,
    public config: Config,
    private wsService: WsService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.wsService.connect();

    this.apiService.client("positions").subscribe((res: any[]) => {
      this.positions = res;

      this.positionsSub = this.wsService.positions$.subscribe(positions => {
        this.positions = positions || this.positions;
      });
    });

    this.apiService.client("orders").subscribe((res: any[]) => {
      this.orders = res.map((t) => ({
        ...t,
        type: this.formatOrderString(t.type),
        state: this.formatOrderString(t.state),
      }));
    });

    this.order = this.fb.group({
      actionType: ["", Validators.required],
      symbol: ["", Validators.required],
      openPrice: ["", Validators.required],
      stopLoss: ["", Validators.required],
      takeProfit: ["", Validators.required],
      expiration: [""],
      comment: [""],
    });

    this.ios = this.config.get("mode") === "ios";
  }

  ionViewDidEnter() {
    
  }

  ngOnDestroy() {
    this.positionsSub.unsubscribe();
    this.wsService.disconnect();
  }

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: TradeFilterPage,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: { excludedTracks: this.excludeTracks },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.excludeTracks = data;
      // this.updateSchedule();
    }
  }

  // async addFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any) {
  //   if (this.user.hasFavorite(sessionData.name)) {
  //     // Prompt to remove favorite
  //     this.removeFavorite(slidingItem, sessionData, "Favorite already added");
  //   } else {
  //     // Add as a favorite
  //     this.user.addFavorite(sessionData.name);

  //     // Close the open item
  //     slidingItem.close();

  //     // Create a toast
  //     const toast = await this.toastCtrl.create({
  //       header: `${sessionData.name} was successfully added as a favorite.`,
  //       duration: 3000,
  //       buttons: [
  //         {
  //           text: "Close",
  //           role: "cancel",
  //         },
  //       ],
  //     });

  //     // Present the toast at the bottom of the page
  //     await toast.present();
  //   }
  // }

  async remove(
    slidingItem: HTMLIonItemSlidingElement,
    trade: any
  ) {
    const alert = await this.alertCtrl.create({
      header: 'Remove Pending Order',
      message: "Would you like to remove this pending order?",
      buttons: [
        {
          text: "Cancel",
          handler: () => {
            slidingItem.close();
          },
        },
        {
          text: "Remove",
          handler: () => {
            this.apiService.client(`orders/${trade.id}`, 'DELETE').subscribe(res => console.log(res));
            slidingItem.close();
          },
        },
      ],
    });
    // now present the alert on top of all other content
    await alert.present();
  }

  async openSocial(network: string, fab: HTMLIonFabElement) {
    const loading = await this.loadingCtrl.create({
      message: `Posting to ${network}`,
      duration: Math.random() * 1000 + 500,
    });
    await loading.present();
    await loading.onWillDismiss();
    fab.close();
  }

  cancel() {
    this.modal.dismiss(null, "cancel");
  }

  confirm() {
    // this.submitted = true;
    console.log(this.order);
    if (this.order.valid) {
      this.modal.dismiss(this.order, "confirm");
      // this.userData.login(this.login.username);
      // this.router.navigateByUrl('/app/tabs/trades');
    }
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === "confirm") {
      // this.message = `Hello, ${ev.detail.data}!`;
      console.log(ev.detail);
    }
  }

  formatOrderString(orderString) {
    if (!orderString) return "";

    // Remove "ORDER_" prefix, split by underscores, and capitalize words
    return orderString
      .replace(/^ORDER_TYPE_|^ORDER_STATE_|^POSITION_TYPE_/, "") // Remove "ORDER_" prefix
      .toLowerCase() // Convert to lowercase
      .split("_") // Split into words
      .join(" "); // Join words with spaces
  }

  deleteLimitOrders() {
    throw new Error("Method not implemented.");
  }
  deleteStopOrders() {
    throw new Error("Method not implemented.");
  }
  deleteAllOrders() {
    throw new Error("Method not implemented.");
  }
}
