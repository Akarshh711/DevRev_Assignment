/*
 * Copyright (c) 2023 DevRev, Inc. All rights reserved.
 */

import { client } from "@devrev/typescript-sdk";

async function handleEvent(event: any) {
  const devrevPAT = event.context.secrets.service_account_token;
  const API_BASE = event.execution_metadata.devrev_endpoint;
  const devrevSDK = client.setup({
    endpoint: API_BASE,
    token: devrevPAT,
  });

  const messageInput = event.input_data.global_values.input_field_1;
  const officeHoursStart = event.input_data.global_values.office_hours_start;
  const officeHoursEnd = event.input_data.global_values.office_hours_end;
  const currentTime = new Date().toLocaleTimeString();

  if (isOutsideOfficeHours(currentTime, officeHoursStart, officeHoursEnd)) {
    const autoReplyMessage = event.input_data.global_values.auto_reply_message;
    const workItemId = event.payload.work_created.work.id;
    const bodyComment = `${autoReplyMessage} - Auto reply sent outside office hours.`;
    
    const body = {
      object: workItemId,
      type: 'timeline_comment',
      body:  bodyComment,
    };

    const response = await devrevSDK.timelineEntriesCreate(body as any);
    console.log(JSON.stringify(response.data)); // Log the response for debugging purposes
    return response; // Return the response
  } else {
    return; // Return undefined if not outside office hours
  }
}

function isOutsideOfficeHours(currentTime: string, start: string, end: string) {
  // Implement logic to determine if currentTime is outside office hours
  // For simplicity, assuming office hours are defined in 24-hour format HH:mm
  return currentTime < start || currentTime > end;
}

export const run = async (events: any[]) => {
  console.info('events', JSON.stringify(events), '\n\n\n');
  for (let event of events) {
    const resp = await handleEvent(event);
    if (resp) {
      console.log(JSON.stringify(resp.data));
    } else {
      console.error('Response is undefined');
    }
  }
};


export default run;
