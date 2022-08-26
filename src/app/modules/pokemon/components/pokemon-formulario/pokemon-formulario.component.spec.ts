import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PokemonFormularioComponent} from './pokemon-formulario.component';
import {Pokemon} from "../../models/PokemonListado.model";
import {NO_ERRORS_SCHEMA, SimpleChange} from "@angular/core";

describe('PokemonFormularioComponent', () => {
  let component: PokemonFormularioComponent;
  let fixture: ComponentFixture<PokemonFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonFormularioComponent],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if is edit should have pokemon ', function () {
    fixture = TestBed.createComponent(PokemonFormularioComponent);
    component = fixture.componentInstance;
    component.pokemon = Pokemon.instanceNewObject({name: 'Prueba'});
    component.isSave = false;
    component.ngOnChanges({
      name: new SimpleChange(null, component.title, true),
    })
    fixture.detectChanges();
    expect(component.nuevo).toEqual(false);
    expect(component.pokemon).toBeTruthy();
    expect(component.title).toEqual('Editar Pokemon (Prueba)');
  });

  it('if not is edit should have pokemon empty', function () {
    fixture = TestBed.createComponent(PokemonFormularioComponent);
    component = fixture.componentInstance;
    component.isSave = true;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.nuevo).toEqual(true);
    expect(component.pokemon).toBeTruthy();
  });
});
