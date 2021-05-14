import { createWidget } from "discourse/widgets/widget";
import hbs from "discourse/widgets/hbs-compiler";

createWidget("error-state", {
  tagName: "div.error-state",
  template: hbs`
    <div class="face">:(</div>
    <div class="reason">{{transformed.title}}</div>
    <div class="description">
      {{transformed.description}}
    </div>
  `,

  transform(attrs) {
    if (attrs.errorCode === 429) {
      return {
        title: "Rate Limited",
        description: "Please wait before trying again",
      };
    }

    return {
      title: "Error",
      description: "Something went wrong",
    };
  },
});
