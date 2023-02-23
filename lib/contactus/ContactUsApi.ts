import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { ContactUsEndpoint } from "./endpoints/ContactUsEndpoint";

export class ContactUsApi {
  protected readonly client: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.client = axios.create(config);
  }

  get contactUs() {
    return new ContactUsEndpoint(this.client);
  }
}
