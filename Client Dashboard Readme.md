Client Dashboard:
Profile completeness: how complete the company profile is (see "Client Profile tab" below for how it is calculated).
Active job offers (3): how many job offers the client has open. 
Candidates matched (20): how many consultants the AI search has matched across all their offers.
Interviews booked (2): how many interviews are scheduled, with the next one ("Thu 10:00").

Client Profile tab:

Requirements - profile completeness metric
- The score is calculated from real profile data every time the tab renders. It is never hardcoded.
- Score = sum of the weights of the items that are complete. Weights total 100.
- An item counts only when its data is present: text fields must not be empty or blank, technology areas need at least one selection, and the profile photo must be uploaded.
- Only a posted job counts for "First job posted". A draft does not.
- Removing data (for example removing the photo or clearing the website) lowers the score on the next render.
- The score is a whole number from 0 to 100 and is shown inside the ring as "NN%".

| Item | Weight | Complete when | Next-step hint |
|---|---|---|---|
| Company name | 10% | name is not empty | Add your company name |
| Company website | 10% | website is not empty | Add your company website |
| Industry, size, location | 10% | industry, employee count and location are all filled | Add your industry, employee count and location |
| Profile photo | 15% | a photo is uploaded | Upload a profile photo |
| Technology areas | 15% | at least one area selected | Select your technology areas |
| Goal and stage | 10% | primary goal and "where you are today" are filled | Tell us your goal and where you are today |
| First job posted | 30% | at least one job is posted (not a draft) | Post your first job |

Requirements - hint text
- The line under the ring shows the highest-weight missing item as "Next: <hint> (+N%)", where N is that item's weight.
- If several missing items have the same weight, the first one in the table order is shown.
- At 100% it reads "Your profile is complete".

Requirements - colors
One color per band. The ring stroke and the percentage number use the same color. Each color has a light and a dark theme value.

| Score | Band | Token | Light theme | Dark theme |
|---|---|---|---|---|
| 0-24% | Just started | --pc-1 (red) | #b4462f | #d9705a |
| 25-49% | Getting there | --pc-2 (amber) | #c98a2e | #e0a24a |
| 50-74% | Halfway | --pc-3 (slate) | #547691 | #7fa3bf |
| 75-99% | Almost done | --pc-4 (blue) | #2f7fa8 | #5aa9d1 |
| 100% | Complete | --pc-5 (green) | #3f9e83 | #4fb596 |

- Band edges: 25, 50 and 75 belong to the higher band. Only exactly 100% is green.
- The ring track (unfilled part) keeps the neutral track color in every band.
- The ring fill animates to the new value when the tab opens.

Requirements - editing About your company and How you use Cloud Club
- Every field in both cards is mandatory (marked with a red *): company name, website, industry, employee count, location, how you heard about us, primary use, primary goal, where you are today, firm type and industries served (when shown), and at least one technology area.
- Fields can be changed, but Save changes is blocked while any field is empty or only spaces. The empty fields turn red with "<field> is required", the first one is focused, and nothing is saved.
- What the user already typed is kept when validation fails, and the red error clears as soon as the field has a value.
- Saved values are trimmed of leading and trailing spaces.
- Editing one card never switches the other card into edit mode.
- Technology areas include "I’m not sure". It is exclusive: selecting it clears the other areas, and selecting any other area clears it.
- Cancel asks for confirmation and then restores the previous values, including technology area changes.

Requirements - Monthly / Yearly metrics switch
- A Monthly | Yearly switch above the summary cards changes the period for the three metric cards. Default is Monthly. The label next to the switch shows the period ("Showing October 2026" or "Showing 2026"), and each card title shows "· month" or "· year".
- Job postings posted: count of posted jobs created in the selected period (current calendar month or year), with the number of drafts from that period that are not posted.
- Candidates matched: consultants matched in the period. Monthly shows "+8 this week"; Yearly shows how many job postings they span.
- Interviews booked: interviews in the period. Monthly shows the next interview; Yearly shows the total across all consultants.
- Profile completeness is not affected by the switch.
- The same Monthly | Yearly switch (shared, default Monthly) is also above the metric cards on Searches, Payments and Projects. Searches filters by created date, Payments by work period, and Projects by whether the project ran in the period. "Needs your attention" is always current and ignores the switch. Tables and lists below the cards are not filtered.
- A new client with no data sees 0 in every card for both periods.

The tab also shows:
- Summary cards: profile completeness, active job postings (with drafts not posted), candidates matched and interviews booked.
- "Get started with Cloud Club" checklist until the first job is posted.
- About your company and How you use Cloud Club (editable), plus uploaded documents. See tab 1 below.

Client Dashboard Functionalities (by tab):

1. Company Profile (home tab)
- Header shows "Welcome, <company name>" and a "New job offer" button.
- Four summary cards: profile completeness, active job offers, candidates matched, interviews booked (with the next interview).
- About your company: company name, website, industry, employee count, location and how you heard about us. Edit, Save changes or Cancel.
- How you use Cloud Club: technology areas (selectable chips), primary use, primary goal and where you are today. Edit, Save changes or Cancel.
- Uploaded documents: drag and drop or browse to upload job descriptions, SOWs, project briefs and similar files (PDF, DOC, DOCX, TXT, XLSX, PPTX, max 10 MB each). Each file can be removed.

2. Searches
- Lists all consultant searches with created date, role, start date and number of matched consultants.
- Status tags show whether a search is a Draft, has Matches ready or is an Active project.
- Click a search to continue the draft or review the matched consultants.
- Edit the title of a search (pencil icon), then Save or Cancel.
- "New search" button starts a new job offer.
- Each card has Edit, Close and Delete buttons. Clicking the card, "Continue draft" or "View matches" opens the matched consultants page. Edit opens the Job posting tab (for a draft it continues the draft).
- Close (posted only) marks the posting as Closed and moves it to the Closed tab. Reopen puts it back.
- Delete always asks for confirmation. A draft is simply deleted. A posted job is deleted in the backend and its matches are removed. Both appear in the Deleted tab as read-only history ("Deleted draft" or "Deleted posting").
- Tabs: All, Posted, Drafts, Closed, Deleted. A search box filters the cards by title or role within the current tab.

3. Job Offers
- Summary cards: open offers, candidates in pipeline, average time to shortlist.
- Table of all job offers with role, status (Matching, Interviewing, Filled), number of candidates, budget and created date.
- "New job offer" starts a new offer in one of three ways: fill the intake form, upload an existing job description (PDF or Word, it prefills the form), or reuse an existing offer.
- The job offer form (wizard) has 5 steps: hiring urgency and reason; job specifications (resources, dates, budget); skill set and experience; work location and availability; authority and approval.
- Required fields are checked before moving to the next step. Leaving the page asks for confirmation so answers are not lost by accident.
- Skai AI chat can also be used to build the job offer, and the form data carries across between the intake form, the wizard and Skai.

4. Consultant Search Results (after creating a job offer)
- Shows a summary of the job offer (location, hours per week, budget, contract length) with an "Edit offer" button.
- Consultants are shown anonymously with an ID (CC-###), with no names or contact details.
- Each consultant shows a role match score, rate, time zone and verified skills badge.
- Sort by best match, lowest rate or earliest availability. Filter by verified skills only.
- Select one, many or all consultants with the checkboxes, then "Invite to interview".
- "Schedule a call" button to get help from Cloud Club.

5. Consultant Profile
- Opened from the search results or from the Interviews tab (the Back button returns to where you came from).
- Shows role match, rate, hours per week, proven or new consultant badge, verified skills, languages, education and certifications.
- Experience overview, industries, technologies, work experience (expandable) and role fit (must have, preferred, bonus).
- "Book interview" button.

6. Schedule Interviews (2 steps)
- Step 1: choose number of interviews, interview format (one-on-one, small team, panel) and add up to 6 interviewers from your side with name and work email.
- Step 2: pick at least two business days for each consultant, using one tab per consultant, and choose a time frame for every date (morning, afternoon, evening or flexible).
- A date given to one consultant is blocked for the others, so each interview gets its own time.
- Sync Google Calendar to strike out days when you are busy.
- Choose your time zone. The side panel lists the proposed dates for each consultant.
- Send invites. Consultants have two working days to confirm.

7. Interviews
- One card per interview with the consultant ID, role, date and time, and status (Confirmed or Pending).
- Consultant details are shown on the card: time zone, rate, specialty, experience, availability, languages, skills and certifications.
- Interviewers on the call are listed. Add an interviewer by name and email (an invite is sent) or remove one, up to 6 in total.
- When confirmed: video meeting link with Copy link and Join interview buttons. Before that, a note says the link appears once the consultant confirms.
- "View resume" opens the consultant profile.

8. Projects
- Summary cards: companies, projects, projects in delivery, hours delivered.
- Projects are grouped by company. Each group can be collapsed or expanded and shows an average progress bar and hours used against hours planned.
- Each project shows the created date, start and end dates, hours per week, progress, status (On track, At risk, Completed, Hiring in progress) and the assigned consultants.
- Projects still being hired show "Awaiting hire" and the Timesheet button is disabled.

9. Timesheet (opened from a project)
- Switch project and consultant with the drop-downs. Move between months.
- Shows total hours for the month against the expected hours, with a progress bar.
- Weekly list with each week's total and status (Draft, Submitted, Approved, Changes requested).
- Select a week to see the hours logged per day with the task.
- When a week is submitted by the consultant: "Approve week hours" or "Request changes". A draft week cannot be approved yet.

10. Payments
- Summary cards: paid to date, outstanding, upcoming, billable hours.
- Filter by status: All, Upcoming, Processing, Due, Paid.
- Table with payment number, consultant, project, work period, billable hours, hourly rate, amount due, anticipated pay date and status.
- Rows per page (5 or 10) and previous / next page buttons.

11. Referrals
- Your referral code with a Copy button.
- Invite by email: type an email address and send.
- Summary cards: invites sent, signed up, hired.
- Referral history table with the person invited, company, date invited and status (Invited, Signed up, Hired).

12. Settings
- Account: upload, change or remove profile photo (JPG, PNG or WebP, up to 2 MB, cropped square and shown in the sidebar, saved on this device). Shows name, work email, company and role. Buttons to edit the company profile and change the password (reset link is emailed).
- Email notifications: switches for new matches, interviews, payments, timesheets and referrals.
- Appearance: Light or Dark theme with a preview.
- Security: two-step verification switch and Sign out button.

Available on every tab
- Left sidebar to move between tabs. It can be collapsed.
- Notifications bell with an unread count. Click a notification to open the related tab and mark it as read, or use "Mark all as read".
- Profile photo and name at the bottom of the sidebar, with the Sign out button.
- After onboarding is completed, the user lands in the client portal.
