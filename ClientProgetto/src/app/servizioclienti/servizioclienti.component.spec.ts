import { TestBed, async } from '@angular/core/testing';
import { ServizioclientiComponent } from './servizioclienti.component';

describe('ServizioclientiComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ServizioclientiComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ServizioclientiComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ClientProgetto'`, () => {
    const fixture = TestBed.createComponent(ServizioclientiComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ClientProgetto');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ServizioclientiComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ClientProgetto app is running!');
  });
});
