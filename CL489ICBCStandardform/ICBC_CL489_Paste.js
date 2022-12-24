/*!
 * ICBC CL489 series - pasting function requires /n/n which cannot be exported/imported properly as html
 * PasteToEncounter must be in image library
 * Licensed under Creative Commons Attribution-ShareAlike 3.0 Unported License
 */


/* Allow Copy to Encounter with proper formatting */
		function PasteToEncounter(notes, header) {
			try {
				var win = window.parent.opener;
					
				// Traverse up window parent opener
				while (win != null) {
					if (win.document.forms["caseManagementEntryForm"] != undefined) {
						break;
					}
					win = win.parent.opener;
				}

				win.document.getElementById("newNoteImg").onclick();
				var textAreaId = win.document.getElementsByTagName("textarea")[0];
				var encounterArea = win.document.getElementById(textAreaId.id);
				encounterArea.value = encounterArea.value + "\n\n" + header;
				encounterArea.value = encounterArea.value + "\n" + notes;
				encounterArea.style.height = encounterArea.scrollHeight + "px";
			} catch (e) {
				alert("Error: Unable to copy to encounter note");
			}
		}

				/* Appends Encounter Note with textarea fieldId's value; split into individual functions */
		function UpdateEncounter(fieldId,header) {
			var notes = document.getElementById(fieldId).value;
			
			// Copy textarea to Encounter
			if (notes.length !== 0) {
				PasteToEncounter(notes, header);
			}
		}

		function UpdateEncounterBoxes(boxIds, boxDetails, header) {
			// Translate checkbox items via array and 
			// add text input document.getElementById(box).value, use null as output
			var notes = []

			for (i = 0; i < boxIds.length; i++) {
				var box = boxIds[i]
				if (document.getElementById(box).value === 'X') {
					notes.push(boxDetails[i])
				} else if (document.getElementById(box).value != '') {
					notes.push(document.getElementById(box).value)
				}
			}

			notes = notes.join(" ")

			// Copy textarea to Encounter
			if (notes.length !== 0) {
				PasteToEncounter(notes, header);
			}
		}
