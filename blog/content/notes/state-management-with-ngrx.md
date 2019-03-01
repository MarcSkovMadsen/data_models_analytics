Title: State management with ngrx
Date: 2018-03-01
Modified: 2018-03-01
Category: POCs
Tags: Angular, ngrx, State Management
Slug: state-management-with-ngrx
Authors: Marc Skov Madsen
Summary: A colleague suggested I learn and use state management in Angular. These notes documents the steps and learnings.

A colleague suggested I learn state management in Angular using either [NGXS](https://github.com/ngxs/store) or [NGRX](https://ngrx.io/). He recommended NGXS over NGRX as it seems to be better integrated with Angular.

These notes documents the steps and learnings.

## State is really just data

A typical web application has the following six types of state:

- Server state
- Persistent state (subset of the server state stored on the client, in memory)
- The URL and router state
- Client state (client state equal to URL and router state)
- Transient client state (client state not in URL)
- Local UI state

In my head I visualize the above as sets.

The architecture of state can be shown as

<img src="https://cdn-images-1.medium.com/max/1600/0*I3jAfhOZPcF1Mjil." alt="state architecture" width="600"/>

## This is how ngx state management works

The architecture of the ngxs state management can be shown as

<img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-L9CoGJCq3UCfKJ7RCUg%2F-LZoLccbzvZjhcgtrQ0z%2F-LZoLea7ZgBJTqq73TVX%2Fdiagram.png?generation=1551361553530490&alt=media" alt="state architecture" width="600"/>

Some important definitions are

- *States* are classes that define a state container.
- *Action types* should contain three parts '\[Context\] verb Entity'. For example '[Zoo] feed Panda'
- - Actions are normally dispatched from container components such as router pages
- *Events* are actions that have already happened and we now need to react to them.
- In computing and telecommunications, the *payload* is the part of transmitted data that is the actual intended message.

## Ahh. Let's play with our first example

This example is based on [Angular NGXS Tutorial With Example From Scratch](https://appdividend.com/2018/07/03/angular-ngxs-tutorial-with-example-from-scratch/). I needed to combine with [Installation of ngxs.store](https://ngxs.gitbook.io/ngxs/getting-started/installation) for the installation.

### Steps

```bash
ng new ng6xs
cd ng6xs/
npm install @ngxs/store --save
npm install @ngxs/logger-plugin
npm install @ngxs/devtools-plugin
```

I then tried to serve but got an error. I solved it by updating to "rxjs": "6.3.3" in package.json. See [Issue](https://github.com/MarkPieszak/aspnetcore-angular-universal/issues/714)

```bash
ng serve -o
ng g c components/create --spec=false
ng g c components/index --spec=false
npm install bootstrap --save
```

It works like it should

<img src="https://appdividend.com/wp-content/uploads/2018/07/Angular-State-Management-Pattern.png" alt="state architecture" width="600"/>

## Quick question for my colleague

- I only see the Store imported in create.component.ts. Shouldn't it be imported and provided in the app.module.ts? Yes. But its imported and provided by

```ts
import { NgxsModule } from '@ngxs/store';
...
imports: [
    BrowserModule,
    NgxsModule.forRoot([
      UserState
    ]),
```

My colleague further more recommended to use

- [redux-devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en-US)
- ngxs router plugin
- [microsoft angular plugin](https://www.npmjs.com/package/@azure/msal-angular)

and to study

- [Architect, design & build scalable Angular applications](https://medium.com/finiteloop-systems/architect-design-build-scalable-angular-applications-ce336a3c153a)

## A second, more advanced example

https://github.com/tommythongnguyen/Ngxs-Pizza-Order