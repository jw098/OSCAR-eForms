function Signature_add() {
		document.FormName.Comments.value += '\r\rSincerely, \r\r\r\r';
		document.FormName.Comments.value += document.FormName.CurrentProviderDoctor.value;
		document.FormName.Comments.focus();
	}
	
function LastWorkSet_add() {
		document.FormName.Comments.value += 'The last day this patient worked prior to the current medical absence was ';
		document.FormName.Comments.value += document.FormName.LastWorkDate.value;
		document.FormName.Comments.value += '.  '
		document.FormName.Comments.focus();
		document.FormName.subject.value = 'sick note with off work dates';
	}
	
function OffSinceSet_add() {
		document.FormName.Comments.value += 'This patient has been unable to work due to medical reasons since ';
		document.FormName.Comments.value += document.FormName.OffSinceDate.value;
		document.FormName.Comments.value += '.  '
		document.FormName.Comments.focus();
		document.FormName.subject.value = 'sick note with time off work dates';
	}
	
function RTWset_add() {
		document.FormName.Comments.value += 'The approximate return to work date is estimated to be ';
		document.FormName.Comments.value += document.FormName.RTWdate.value;
		document.FormName.Comments.value += '.  '
		document.FormName.Comments.focus();
		document.FormName.subject.value = 'sick note with RTW date';
	}

function SeenToday_add() {
		document.FormName.eForm_title.value = 'Certificate of Health Status';
		document.FormName.Comments.value = 'It is hereby confirmed that this patient was seen by the doctor at this clinic today, regarding a medical problem.  ';
		document.FormName.subject.value = 'sick note seen today';
		document.FormName.Comments.focus();
	}

function Offwork2to3d_add() {
		document.FormName.eForm_title.value = 'Certificate of Health Status';
		document.FormName.Comments.value = 'This patient was seen at this clinic today with a medical problem/illness, and should rest at home for the next 2 to 3 days to recover.  ';
		document.FormName.subject.value = 'sick note 2-3d';
		document.FormName.Comments.focus();
	}

function Offwork3to5d_add() {
		document.FormName.eForm_title.value = 'Certificate of Health Status';
		document.FormName.Comments.value = 'This patient was seen at this clinic today with a significant medical problem/illness, and should rest at home for the next 3 to 5 days to recover.  ';
		document.FormName.subject.value = 'sick note 3-5d';
		document.FormName.Comments.focus();
	}

function Offwork1w_add() {
		document.FormName.eForm_title.value = 'Certificate of Health Status';
		document.FormName.Comments.value = 'This patient was seen at this clinic today with a significant medical problem/illness, and should rest at home for the next week to recover.  ';
		document.FormName.subject.value = 'sick note 1w';
		document.FormName.Comments.focus();
	}

function Offwork2w_add() {
		document.FormName.eForm_title.value = 'Certificate of Health Status';
		document.FormName.Comments.value = 'This patient was seen at this clinic today with a significant medical problem/illness, and should rest at home for the next 2 weeks to recover, pending clinical reassessment.  ';
		document.FormName.subject.value = 'sick note 2w';
		document.FormName.Comments.focus();
	}

function Offwork1m_add() {
		document.FormName.eForm_title.value = 'Certificate of Health Status';
		document.FormName.Comments.value = 'This patient was seen at this clinic today with a complex and significant medical problem/illness.  A prolonged absence from work is necessary to allow the patient to recover.  The return to work date is estimated to be one month from today, pending medical reassessment.  ';
		document.FormName.subject.value = 'sick note 1m';
		document.FormName.Comments.focus();
	}

function Stressleave_add() {
		document.FormName.eForm_title.value = 'Certificate of Health Status';
		document.FormName.Comments.value = 'This patient was seen at this clinic today with a significant psycho-social/mental health/stress concerns, and is struggling to cope.  A prolonged absence from work for the next two to four weeks is necessary to allow the patient to recover and deal with the stress.  Regular medical follow up will be conducted to monitor clinical progress and to determine readiness to return to work.  ';
		document.FormName.subject.value = 'sick note stress leave';
		document.FormName.Comments.focus();
	}

function RTWuncertain_add() {
		document.FormName.eForm_title.value = 'Certificate of Health Status';
		document.FormName.Comments.value += 'The exact return to work date is as yet uncertain, and will be determined in the course of future reassessments as per clinical progress.  ';
		document.FormName.subject.value += ' uncertain RTW';
		document.FormName.Comments.focus();
	}

function Backtowork_add() {
		document.FormName.eForm_title.value = 'Certificate of Health Status';
		document.FormName.Comments.value ='This is to confirm that this patient has recovered from a recent medical problem and is now ready to return to usual duties at work with no specific restrictions.  ';
		document.FormName.subject.value ='RTW note';
		document.FormName.Comments.focus();
	}

function Fitforjob_add() {
		document.FormName.eForm_title.value = 'Certificate of Health Status';
		document.FormName.Comments.value = 'This is to confirm that '
		document.FormName.Comments.value += document.FormName.first_last_name.value;
		document.FormName.Comments.value += ' has been assessed by me at this office today.  This patient is known to me from previous encounters.  At this time I am not aware, in good faith, of any physical or mental barriers or impediments precluding this patient from working in the job/capacity/position applied for.  ';
		document.FormName.subject.value ='Fitness for job note';
		document.FormName.Comments.focus();
	}

function Flushot_add() {
		document.FormName.eForm_title.value = 'Certificate of Vaccine Status';
		document.FormName.Comments.value = document.FormName.first_last_name.value;
		document.FormName.Comments.value += ' received the seasonal influenza vaccine at this clinic today.  ';
		document.FormName.subject.value = 'Flu shot note';
		document.FormName.Comments.focus();
	}

function CPAP_Rx_add() {
		document.FormName.eForm_title.value = 'Extended Health Care Insurance Pre-Authorization for CPAP Rx';
		document.FormName.Comments.value = document.FormName.first_last_name.value;
		document.FormName.Comments.value += ' has been diagnosed with Sleep Apnea.  Left untreated, this can have serious health effects.  This patient will need a CPAP machine, heated humidifier, and nasal interface on a permanent basis. \n\nThe patient will also require replacement of the CPAP mask (nasal interface), hose, and filter every year due to hygienic reasons, and to ensure a proper seal.  And the patient will need Nasal Cushions every 6 months. \n\nThank you for your attention to this matter.  ';
		document.FormName.subject.value = 'CPAP Rx';
		document.FormName.Comments.focus();
	}

function Missed_Appt1_add() {
		document.FormName.eForm_title.value = 'Missed Appointment';
		document.FormName.License.value = '';
		document.FormName.LicenseNumber.value = '';
		document.FormName.MSP_ID.value = '';
		document.FormName.MSPNumber.value = '';
		document.FormName.Introduction.value = 'To: ';
		document.FormName.Introduction.value += document.FormName.first_last_name.value;
		document.FormName.PatientName.value = 'Your missed appointment';
		document.FormName.DOB1.value = 'Date';
		document.FormName.DOB.value = document.FormName.appt_date.value;
		document.FormName.Comments.value = 'It is noted that you missed your scheduled appointment.  Missing an appointment causes great disruptions for many reasons:\n\n1)  The team member assigned to see you has a period of unproductive time in his or her schedule.\n2)  Time taken by the team member to prepare for your visit is wasted.\n3)  A patient who has need of an appointment is prevented from being scheduled.\n\nWe understand that circumstances may arise that make keeping an appointment difficult or impossible.  However, it is important for you to understand the consequences of missed appointments.  To minimize the effect of missed appointments, we ask that you cancel an appointment by notifying the receptionist 24 hours prior to your scheduled appointment.  Doing so will enable your doctor to continue to deliver efficient health care to those in need.  Please note that someone who habitually misses appointments may be charged a fee.  ';
		document.FormName.Salutation.value =  'Dear ' + document.FormName.first_last_name.value + ',';
		document.FormName.subject.value = 'Missed Appt warning';
		document.FormName.Comments.focus();
	}

function Missed_Appt2_add() {
		document.FormName.eForm_title.value = 'Missed Appointment - 2nd Notice';
		document.FormName.License.value = '';
		document.FormName.LicenseNumber.value = '';
		document.FormName.MSP_ID.value = '';
		document.FormName.MSPNumber.value = '';
		document.FormName.Introduction.value = 'To: ';
		document.FormName.Introduction.value += document.FormName.first_last_name.value;
		document.FormName.PatientName.value = 'Your missed appointment';
		document.FormName.DOB1.value = 'Date';
		document.FormName.DOB.value = document.FormName.appt_date.value;
		document.FormName.Comments.value = 'It is noted that you missed another scheduled appointment without notification.\n\nYou have been requested previously to cancel an appointment by notifying the receptionist 24 hours prior to your scheduled appointment.\n\nWe have enclosed an invoice for $XX.XX for the missed appointment.  Payment will accepted in the form of cash, credit or debit prior to scheduling of your next appointment.  ';
		document.FormName.Salutation.value =  'Dear ' + document.FormName.first_last_name.value + ',';
		document.FormName.subject.value = 'Missed Appt + invoice';
		document.FormName.Comments.focus();
	}
	
function Daycare_add() {
		document.FormName.eForm_title.value = 'Certificate of Health Status';
		document.FormName.Comments.value = document.FormName.first_last_name.value;
		document.FormName.Comments.value += ' was assessed at this clinic today.  It is my medical opinion that this child does not currently pose a significant risk in terms of serious infectious disease, and thus does not need to be isolated.  This child may return to usual activities at daycare.  ';
		document.FormName.subject.value = 'Daycare note';
		document.FormName.Comments.focus();
	}

function Massage_Therapy_add() {
		document.FormName.eForm_title.value = 'Request for Massage Therapy';
		document.FormName.Comments.value = 'This patient would benefit from massage therapy to address ongoing musculoskeletal problems.  ';
		document.FormName.subject.value = 'Massage therapy note';
		document.FormName.Comments.focus();
	}

function Orthotics_add() {
		document.FormName.eForm_title.value = 'Request for Custom Foot Orthotics';
		document.FormName.Comments.value = 'This patient requires custom orthotic inserts to address ongoing orthopaedic concerns.  ';
		document.FormName.subject.value = 'Orthotic inserts note';
		document.FormName.Comments.focus();
	}