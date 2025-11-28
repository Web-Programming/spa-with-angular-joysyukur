import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { Detail } from './detail';

describe('Detail', () => {
  let component: Detail;
  let fixture: ComponentFixture<Detail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detail);
=======
import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailComponent);
>>>>>>> 730137b9f0578f93a75f72c84e4a6facb8d03f41
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
