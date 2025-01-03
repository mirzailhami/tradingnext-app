import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WsService {

  private socket: WebSocket;
  private market = new BehaviorSubject<any>(null);
  private positions = new BehaviorSubject<any>(null);

  // Observable to expose the market data
  market$ = this.market.asObservable();
  positions$ = this.positions.asObservable();

  connect(): void {
    this.socket = new WebSocket('ws://localhost:9090'); // Replace with your Node.js server URL

    this.socket.onopen = () => {
      console.log('WebSocket connected');
    };
  
    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'market') {
        this.market.next(data.data);
      }

      if (data.type === 'position') {
        this.positions.next(data.data);
      }
    };

  
    this.socket.onclose = () => {
      console.log('WebSocket disconnected');
    };
  
    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.close();
    }
  }
}
