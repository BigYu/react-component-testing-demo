# Core concepts

## ATDD

Analogous to test-driven development, Acceptance Test Driven Development (ATDD) involves team members with different perspectives (customer, development, testing) collaborating to write acceptance tests in advance of implementing the corresponding functionality.  The collaborative discussions that occur to generate the acceptance test is often referred to as the three amigos, representing the three perspectives of customer (what problem are we trying to solve?), development (how might we solve this problem?), and testing (what about...).

These acceptance tests represent the user's point of view and act as a form of requirements to describe how the system will function, as well as serve as a way of verifying that the system functions as intended. In some cases the team automates the acceptance tests.

## Snapshot testing

Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.

A typical snapshot test case for a mobile app renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component.

# Frameworks and Libraries for testing

## jest

Jest is a library for testing JavaScript code. It's an open source project maintained by Facebook, and it's especially well suited for React code testing, although not limited to that: it can test any JavaScript code. Jest is very fast and easy to use.

## vs. Mocha

### Strengths of Jest

- works out of the box with minimal setup or configuration.
- supports snapshot testing

### Weaknesses of Jest

- being newer and less widely used among JavaScript developers.
- less tooling and library support available.
- more difficult to use Jest across the board for larger projects that utilize different types of testing.

### Strengths of Mocha

- Mocha’s greatest strength is its flexibility. It doesn’t come with an assertion library or mocking framework.
- a lot of tooling built up around Mocha.
- the Mocha community is large.

### Weaknesses of Mocha

- requires more configuration.
- You can use snapshot testing with Mocha, but it’s not as easy to integrate.

## enzyme

Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.

**Focus on the output, not the implementation**


### Difference between Shallow, Mount and render of Enzyme

https://gist.github.com/fokusferit/e4558d384e4e9cab95d04e5f35d4f913

- Shallow: Real unit test (isolation, no children render)
- Mount: The only way to test componentDidMount and componentDidUpdate. Full rendering including child components.
- Render: only calls render but renders all children.

# Basic setup

# Best practices