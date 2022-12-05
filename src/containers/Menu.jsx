// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// SPDX-License-Identifier: AGPL-3.0-or-later
// SPDX-FileCopyrightText: 2020-2022 grommunio GmbH

import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { Button, Container } from "@mui/material";
import { useAppContext } from "../azure/AppContext";

function Menu() {
  const app = useAppContext();

  const handleLogin = () => {
    app.signIn();
  }

  const handleLogout = () => {
    app.signOut();
  }

  return (
    <div>
      <Container>
        <h1>grommunio Web Next Generation</h1>
        <p className="lead">
          This app uses the Microsoft Graph API
        </p>
        <AuthenticatedTemplate>
          <div>
            <h4>Welcome {app.user?.displayName || ''}!</h4>
            <p>Use the drawer to get started.</p>
            <Button
              onClick={handleLogout}
              variant="contained"
              color="inherit"
              style={{ backgroundColor: 'grey' }}
            >
              Sign out
            </Button>
          </div>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <Button
            color="primary"
            onClick={handleLogin}
            variant="contained"
          >
            Sign in
          </Button>
        </UnauthenticatedTemplate>
      </Container>
    </div>
  );
}

export default Menu;