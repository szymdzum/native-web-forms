# useAnotherFormHook (Proof of Concept v0.07 alpha)

--

*Yet another attempt at reinventing the wheel—because sometimes, you just want your wheel to be shiny, rounder (probably), and just fun!*

## The Story So Far…

One day, a little thought bubbled up:
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

And thus, use-another-hook-form was born!

This project is my experiment in form-building, dictated entirely by:
	•	Visual preferences 🎨
	•	Personal biases 🌀
	•	Odd coding habits 🤷‍♂️

The goal? Make forms as intuitive and composable as LEGO™ bricks. Need a username instead of an email? Just swap:

```jsx
<Email /> ➡️ <Username />
```

Boom! You’re done.

---

✨ Key Objectives

1. Native Form Handling

Harness the power of Web APIs wherever possible. This library embraces web standards, ensuring forms are accessible, user-friendly, and dependency-light.

2. Client & Server Validation

Validation should happen everywhere. Whether it’s the client or server, your data is getting a solid once-over.

3. Minimal React Dependency

React is here to help—but only with the small stuff, like:
	•	Rendering error messages.
	•	Sprinkling on some UI enhancements.

React will NOT manage form state or submission logic. Web standards got this!

4. Preconfigured Inputs

Inputs should work out of the box. Default values? Pre-set attributes? Yes, please. Of course, you can tweak them all you want—just like the perfect pizza topping. 🍕

5. Modern Tooling

This project is a playground for the coolest, shiniest toys:
	•	React Router v7
	•	React 19
	•	Vanilla CSS (because why not?)

If a tool is more than three months old, it’s basically ancient. Let’s keep this thing blazing fast! 🚀

---

🌟 Why Another Form Library?

Because sometimes, it’s not about solving a problem. Sometimes, it’s about chasing an idea that makes you smile.

If you like forms that are simple, composable, and unapologetically biased toward looking good, this is for you.

Pull requests, ideas, and criticisms are welcome!
( It’s still a baby project.)

---

Cheers!
Szymon
