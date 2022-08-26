import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable()
export abstract class BaseHttpService {
  protected url: string = environment.url;

  constructor(protected http: HttpClient) {
  }

  abstract get servicio(): string;
}

