# useAnotherFormHook (POC v0.07 alpha)

*Just a project to play with ideas. Probably not for production. Just use another hook form. Thanks Szymon*

Saw plenty of solid `useForm()` implementations — let me have a go with `useInput()`.

## The Story So Far…

One day, a little thought bubbled up: <br>
“Wouldn’t it be nice if forms could look something like this?”

```jsx
<LoginForm>
  <Email />
  <Password />
  <Submit />
</LoginForm>
```

I stared at it and thought:
“Wow, that’s beautiful. It’s so clear, so easy to grasp! Let’s build it!”
And thus, the idea for `use-another-hook-form` was born!

This project is my experiment in form-building, dictated entirely by:

- My visual preferences 🎨 ( Reducing the visual clutter )
- Personal biases 🌀 ( I will use vanilla css, thank you)
- Odd coding habits 🤷‍♂️ ( Need to find something... )

The goal? Make forms as intuitive and composable as LEGO™ bricks. <br/>
Need a username instead of an email? Just swap:

```jsx
<Email /> ➡️ <Username />
```

Boom! You’re done.

---

✨ Key Objectives

### Native Form Handling

Harness the power of Web APIs wherever possible. This library embraces web standards, ensuring forms are accessible, user-friendly, and dependency-light.

### Client & Server Validation

Validation should happen everywhere. Whether it’s the client or server, your data is getting a solid once-over.

### Minimal React Dependency

React is here to help—but only with the small stuff, like:
- Rendering error messages.
- Sprinkling on some UI enhancements.

React will NOT manage form state or submission logic. Web standards got this!

### Preconfigured Inputs

Inputs should work out of the box. Default values? Pre-set attributes? Yes, please. Of course, you can tweak them all you want—just like the perfect pizza topping. 🍕

###  Modern Tooling

This project is a playground for the coolest, shiniest toys:
-	React Router v7
- React 19
- Vanilla CSS (because why not?)

If a tool is more than three months old, it’s basically ancient. Let’s keep this thing blazing fast! 🚀

---

🌟 Why Another Form Library?

Because sometimes, it’s not about solving a problem. Sometimes, it’s about chasing an idea that makes you smile.

If you like forms that are simple, composable, and unapologetically biased toward looking good, might just be for you. Stay tuned!

Pull requests, ideas, and criticisms are welcome!
( It’s still a baby project.)

---

Cheers!
Szymon
