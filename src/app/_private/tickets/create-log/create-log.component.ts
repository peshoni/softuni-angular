import { Component, inject, Inject, OnInit, Optional, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../modules/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsUtil } from '../../../utils/forms-util';
import { TicketsService } from '../tickets.service';
import { Ticket_Logs_Insert_Input } from '../../../../generated/graphql';

@Component({
  selector: 'app-create-log',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule],
  providers: [TicketsService],
  templateUrl: './create-log.component.html',
  styleUrl: './create-log.component.scss'
})
export class CreateLogComponent implements OnInit {
  private readonly ticketsService: TicketsService = inject(TicketsService);
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  public submitted = signal(false);
  public form!: FormGroup;
  public title: string = 'Add comment';

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) private readonly data: any, @Optional() public dialogRef: MatDialogRef<any>) {
  }

  ngOnInit(): void {
    if (this.data.data.ticket_id) {
      this.form = this.formBuilder.group({
        ticket_id: [this.data.data.ticket_id],
        user_id: [this.data.data.user_id],
        description: [null, Validators.required]
      });
    }
  }

  close() {
    this.dialogRef.close()
  }

  submit() {
    FormsUtil.validateFormGroupControls(this.form);
    if (this.form.invalid) {
      return;
    }
    this.submitted.set(true);
    this.form.disable();
    const value = this.form.getRawValue();

    const insert: Ticket_Logs_Insert_Input = {
      ticket_id: value.ticket_id,
      description: value.description,
      user_id: value.user_id,
    };

    this.ticketsService.upsertLog(insert).subscribe(
      (result) => {
        this.dialogRef.close(result);
      }
    );
  }
}
