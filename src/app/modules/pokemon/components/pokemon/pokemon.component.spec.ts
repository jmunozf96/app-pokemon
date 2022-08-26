import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PokemonComponent} from './pokemon.component';
import {PokemonAccionService} from "../../services/pokemon-accion.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {uuiv4} from "../../../../core/helpers/functions.helper";

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonComponent],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PokemonAccionService
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter data pokemon', function () {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    component.dataSoruce$.next([{
      name: 'Prueba',
      image: '',
      id: 1,
      attack: 50,
      defense: 50,
      type: 'Desconocido',
      hp: 100,
      uuid: 'uuid',
      idAuthor: 1
    }]);
    component.searchData('pru');
    fixture.detectChanges();
    expect(component.dataSoruce$.value).toEqual([{
      name: 'Prueba',
      image: '',
      id: 1,
      attack: 50,
      defense: 50,
      type: 'Desconocido',
      hp: 100,
      uuid: 'uuid',
      idAuthor: 1
    }]);
  });
});
