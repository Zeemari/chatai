import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatInComponent } from './chat-in.component';

describe('ChatInComponent', () => {
  let component: ChatInComponent;
  let fixture: ComponentFixture<ChatInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
