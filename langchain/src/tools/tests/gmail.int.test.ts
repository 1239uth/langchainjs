import { GmailCreateDraft } from "../gmail/create_draft.js";
import { GmailGetMessage } from "../gmail/get_message.js";
import { GetThreadSchema, GmailGetThread } from "../gmail/get_thread.js";
import { GmailSendMessage, SendMessageSchema} from "../gmail/send_message.js";

describe("GmailTool", () => {
  it("creates a draft successfully", async () => {
    const gmailDraftHandler = new GmailCreateDraft();

    const createDraftRequest = {
      message: "some messagee..",
      subject: "some subject....",
      to: ["hamoon.dev@gmail.com"],
    };
    const createDraftResponse = await gmailDraftHandler._call(
      createDraftRequest
    );

    expect(createDraftResponse).toBeTruthy();
  });

  it("gets message successfully", async () => {
    const getMessageHandler = new GmailGetMessage();

    const getMessageRequest = "123";
    const getMessageResponse = await getMessageHandler._call({messageId: getMessageRequest});

    expect(getMessageResponse).toBeTruthy();
  });

  it("gets thread successfully", async () => {
    const getThreadHandler = new GmailGetThread();

    const getThreadRequest: GetThreadSchema = {
      threadId: "123",
    };
    const getThreadResponse = await getThreadHandler._call(getThreadRequest);

    expect(getThreadResponse).toBeTruthy();
  });

  it("send message successfully", async () => {
    const sendMessageHandler = new GmailSendMessage();

    const sendMessageRequest: SendMessageSchema = {
      to: ["hamoon.dev@gmail.com"],
      subject: "some subject...",
      message: "some message...",
    };
    const sendMessageResponse = await sendMessageHandler._call(
      sendMessageRequest
    );

    expect(sendMessageResponse).toBeTruthy();
  });

  // TODO: Search message/thread
});
