import { AxiosResponse } from 'axios'
import { Endpoint } from '../Endpoint';

export interface EmailBody {
  readonly name: string,
  readonly email: string,
  readonly msg: string,
}

export class ContactUsEndpoint extends Endpoint {
  get url() {
    return '';
  }

  process(request: EmailBody): Promise<AxiosResponse<void>> {
    return this.client.post<void>('', request);
  }
}