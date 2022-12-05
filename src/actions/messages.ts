// SPDX-License-Identifier: AGPL-3.0-or-later
// SPDX-FileCopyrightText: 2020-2022 grommunio GmbH

import { createAsyncThunk } from "@reduxjs/toolkit";
import { Message } from "microsoft-graph";
import { getUserMessages } from "../api/messages";
import { AppContext } from "../azure/AppContext";
import { FETCH_MAILS_DATA } from "./types";


export const fetchMessagesData = createAsyncThunk<
  Message[],
  AppContext
>(
  FETCH_MAILS_DATA,
  async (app: AppContext) => {
    if (app.user) {
      try {
        const mails = await getUserMessages(app.authProvider!);
        return mails;
      } catch (err) {
        const error = err as Error;
        app.displayError!(error.message);
      }
    }
    return [];
  }
);
