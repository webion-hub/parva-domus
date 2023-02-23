import { AxiosResponse } from 'axios'
import { Endpoint } from '../Endpoint';

export class ContactUsEndpoint extends Endpoint {
  get url() {
    return '';
  }

  process<T>(request: T): Promise<AxiosResponse<void>> {
    return this.client.post<void>('', request);
  }
}