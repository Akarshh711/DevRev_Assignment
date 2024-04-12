# Auto-Reply Snap-in for Outside Office Hours

## Introduction

The Auto-Reply Snap-in for Outside Office Hours automates the process of replying to messages if they are received outside of specified office hours. This snap-in allows customization of the office hours and auto-reply message based on input parameters.

## Installation Guide

### Prerequisites
- DevRev CLI
- jq

### Steps

1. **Authenticate with DevRev:** Run the following command to authenticate:
    ```bash
    devrev profiles authenticate -o <dev-org-slug> -u <youremail@yourdomain.com>
    ```

2. **Initialize a Snap-in Template:** Initialize a snap-in template by running:
    ```bash
    devrev snap_in_version init
    ```

3. **Create a Snap-in Package:** Create a snap-in package using:
    ```bash
    devrev snap_in_package create-one --slug auto-reply-snap-in | jq .
    ```

4. **Create a Snap-in Version:** Generate a snap-in version with:
    ```bash
    devrev snap_in_version create-one --path ./devrev-snaps-typescript-template | jq .
    ```

5. **Install a Snap-in from a Snap-in Version:** Install the snap-in from the version using:
    ```bash
    devrev snap_in draft
    ```

6. **Configure the Snap-in:** Access snap-in configuration via the generated URL or navigate to the snap-ins page in the DevRev app. Specify office hours and auto-reply message as required.

7. **Deploy the Snap-in:** After configuration, deploy the snap-in by clicking the "Deploy snap-in" button in the UI.

## Functionality

- **Trigger:** The snap-in is triggered when a message is received outside of specified office hours.

- **Action:** Upon triggering, the snap-in automatically sends an auto-reply message to the sender.

## Updating the Code

### Manifest Update
Update the `manifest.yaml` file to configure event sources, function names, and automation details.

### Code Changes
Modify the relevant function files to customize the office hours and auto-reply message based on input parameters.

## Conclusion

By following these steps, you can deploy the Auto-Reply Snap-in for Outside Office Hours to your DevRev organization, providing automated responses to messages received outside of office hours.
## Note: Project Status

Please note that the Auto-Reply Snap-in for Outside Office Hours is currently not functioning as intended. 
