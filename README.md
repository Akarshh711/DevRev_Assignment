# DevRev Snap-in Assignment

Welcome to the DevRev Snap-in Assignment repository! This project contains examples and implementations of snap-ins using the DevRev API. Snap-ins are modular components that extend the functionality of the DevRev platform, allowing you to automate tasks, integrate external services, and enhance user experience.

## About Snap-ins

Snap-ins are small, reusable pieces of code that can be easily integrated into the DevRev platform. They provide a flexible way to customize and extend the functionality of DevRev, enabling developers to build custom workflows, automate processes, and enhance productivity.

## Examples

This repository contains several examples of snap-ins to help you get started:

1. **assignment 1: Utilizing DevRev API**
   - Description: Demonstrates the creation of a work item using the DevRev API.
   - Folder: `assignment1-utilizing-devrev-api/`

2. **assignemnt 2: Creating a Ticket Snap-in**
   - Description: Creates a snap-in that automatically creates tickets in the DevRev platform every 10 minutes.
   - Folder: `assignment2-create-ticket-snap-in/`

3. **assignment 3: Auto-Reply Snap-in**
   - Description: Implements an auto-reply snap-in that responds to messages outside office hours.
   - Folder: `assignment3-auto-reply-snap-in/`
  
  ### Getting started with the template
1. Create a new repository from this template.
2. In the new repository, you can add functions at path `src/functions` where the folder name corresponds to the function name in your manifest file.
3. Each function you add will also need to be mentioned in `src/function-factory.ts` .

### Testing locally
You can test your code by adding test events under `src/fixtures` similar to the example event provided. You can add keyring values to the event payload to test API calls as well.

Once you have added the event, you can test your code by running:
```
npm install
npm run start:watch -- --functionName=function_1 --fixturePath=function_1_event.json
```

### Adding external dependencies
You can also add dependencies on external packages in package.json under the "dependencies" key. These dependencies will be made available to your function at runtime and testing.

### Packaging the code
Once you are done with the testing,
Run
```
npm install
npm run build
npm run package
```
and ensure it succeeds.

You will see a `build.tar.gz` file is created and you can provide it while creating the snap_in_version.
