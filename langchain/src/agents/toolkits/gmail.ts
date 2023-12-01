import { Tool } from "../../tools/base.js";
import { GmailBaseToolParams } from "../../tools/gmail/base.js";
import { GmailCreateDraft } from "../../tools/gmail/create_draft.js";
import { GmailGetMessage } from "../../tools/gmail/get_message.js";
import { GmailGetThread } from "../../tools/gmail/get_thread.js";
import { GmailSearch } from "../../tools/gmail/search.js";
import { GmailSendMessage } from "../../tools/gmail/send_message.js";
import { Toolkit } from "./base.js";

export class GmailToolkit extends Toolkit {
  tools: Tool[];

  constructor(fields?: Partial<GmailBaseToolParams>) {
    super();

    this.tools = [
      new GmailCreateDraft(fields),
      new GmailSendMessage(fields),
      new GmailGetMessage(fields),
      new GmailGetThread(fields),
      new GmailSearch(fields),
    ];
  }
}
