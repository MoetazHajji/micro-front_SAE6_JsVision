import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBoxUploadImgComponent } from './message-box-upload-img.component';

describe('MessageBoxUploadImgComponent', () => {
  let component: MessageBoxUploadImgComponent;
  let fixture: ComponentFixture<MessageBoxUploadImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageBoxUploadImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageBoxUploadImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
