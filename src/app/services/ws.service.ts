import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WsService {

  private socket: WebSocket;

  connect(): void {
    this.socket = new WebSocket('ws://127.0.0.1:9090'); // Replace with your Node.js server URL

    this.socket.onopen = () => {
      console.log('WebSocket connected');
    };
  
    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Real-time data:', data);
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
