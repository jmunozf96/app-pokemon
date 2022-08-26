import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";
import {debounceTime, Subject, Subscription} from "rxjs";
import {InputIconComponent} from "./input-icon.component";

@Component({
  selector: 'input-icon-search',
  template: `
    <form (ngSubmit)="search()" autocomplete="off">
      <div style="width: 300px">
        <div class="icon-input-container">
          <label>
            <i [class]='icon'></i>
            <input
              class="icon-input"
              [type]='type'
              name="termino"
              [(ngModel)]="termino"
              (input)="keyPress()"
              [placeholder]="placeholder"/>
          </label>
        </div>
      </div>
    </form>
  `
})
export class InputSearchComponent extends InputIconComponent implements OnInit, OnDestroy {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();
  termino: string = '';

  subscription!: Subscription;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscription = this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        this.onDebounce.emit(valor);
      });
  }

  search() {
    this.onEnter.emit(this.termino);
  }

  keyPress() {
    this.debouncer.next(this.termino);
  }

  override ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

}
