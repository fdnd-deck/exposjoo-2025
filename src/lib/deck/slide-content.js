import { baseData } from "$lib/deck/base-data";
import Notes from "./partials/Notes.svelte";

import {
  Cover,
  PhotoCollage,
  Planning,
  TextColumns,
  Code,
  Quote,
  IFrame,
  Website,
  LargeTitle,
} from "./slides/index.js";

export const slideContent = [
  {
    slideType: Cover,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      classes: "xlarge-heading", // choose large-, or medium-heading if presentation name is too long'
      sprintNr: {
        content: `${baseData.sprintNumber}`,
      },
      presentationName: {
        content: baseData.presentationName,
      },
      type: {
        content: "talk",
      },
      emojis: {
        content: ["🎓", "💪", "="], // max 3 emojis
      },
    },
  },
  {
    slideType: TextColumns,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      customPill: {
        text: "EXPOSJOO",
        color: "var(--c-highlight)",
        background: "var(--c-text)",
        position: "top left",
      },
      columns: [
        {
          width: "70%",
          title: {
            content: "Hi, I'm Cyd (cydstumpel.nl)",
            level: 2,
            classes: "large-heading",
          },
          pointer: {
            text: "Find my students at <br>the fourth floor later!",
            color: "var(--c-highlight)",
            background: "var(--c-text)",
            position: "center right",
            classes: "fragment small-heading font-bold",
          },
          text: {
            content: `
            <ul>
              <li>Teacher at FDND</li>
              <li class="fragment">CMD Alumnus</li>
              <li class="fragment">Freelance Creative Developer</li>  
            </ul>
            `,
            classes: "small-heading",
          },
        },
      ],
      notes: `
      <ul>
        <li>I'm a teacher at <b>FDND</b>, frontend design & development, you can find my students on the fourth floor later!</li>
        <li>I'm also a <b>CMD Alumnus</b>, I graduated from Communication and Multimedia Design in 2018.</li>
        <li>
          I'm also a <b>freelance creative developer</b>, and a lot of my colleagues are too at the moment. Which gives us our students a unique perspective into the industry.
        </li>
      </ul>
      `,
    },
  },
  {
    slideType: TextColumns,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      customPill: {
        text: "EXPOSJOO",
        color: "var(--c-highlight)",
        background: "var(--c-text)",
        position: "top left",
      },
      columns: [
        {
          width: "70%",
          title: {
            content: "FDND (Frontend Design & Development)",
            level: 2,
            classes: "medium-heading",
          },
          pointer: {
            text: "<p>Have a project for our <br>students? </p><p>Let's talk! 👀</p>",
            color: "var(--c-highlight)",
            background: "var(--c-text)",
            position: "center right",
            classes: "fragment small-heading font-bold",
          },
          text: {
            content: `
            <ul>
              <li class="fragment">Two year Associate Degree program</li>
              <li class="fragment">Real clients</li>
              <li class="fragment">Agency/Studio environment</li>
              <li class="fragment">Very practical, and idealistic approach</li>
            </ul>
            `,
            classes: "small-heading",
          },
        },
      ],
      notes: `
      <p>
        First of all, if you have a project for our students, let's talk after!!
      </p>
      <ul>
        <li>
          Frontend Design & Development is a <b>two year Associate Degree program</b>. 
          Associate degrees are quite new at the Hogeschool van Amsterdam, they are 
          a bridge between a vocational education (MBO) and a "Higher Education" (HBO).
        </li>
        <li>
          <b>We use our connections</b> with the industry to let the students work for real clients.
          This is a great way to get practical experience, but also network during their study.
        </li>
        <li>
          <b>We have only two years</b> to teach them everything they need to know to start 
          working as frontend developers, but also the soft skills that come with the job. 
          For example working agile in sprints in stead of a waterfall approach and working 
          together with multi disciplinairy teams. 
        </li>
        <li>
          <b>We can also be very idealistic</b> in our teaching, because we don't work for profit. 
          We teach our students about important topics like progressive enhancement, graceful degradation, 
          performance and responsive design. A big part of our curriculum is about accessibility, something 
          that is a very valuable skill to have as new legislation from the EU has gone into effect regarding 
          web accessibility and many companies don't do enough with it to be compliant.
          It also makes our students more considerate of the people that use their websites.
        </li>
      </ul>
      `,
    },
  },
  {
    slideType: Planning,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      customPill: {
        text: "EXPOSJOO",
        color: "var(--c-highlight)",
        background: "var(--c-text)",
        position: "top left",
      },
      title: {
        content: "Planning",
        level: 1,
        classes: "xlarge-heading",
      },
      progress: 0,
      list: ["What is (modern) CSS?", "Scroll-driven animations", "View Transitions"],
    }
  },
  {
    slideType: Website,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      ratio: "2984/1848",
      image: {
        url: "/hva.jpeg",
        alt: "HvA",
      },
      notes: `
      <p>CSS stands for Cascading Style Sheets, it's used to style your HTML. And HTML is the language we use to structure webpages and add content like videos, text, images, etc..</p>
      <p>If that's hard to understand, this is a completely random website I found with CSS...</p>
      `,
    },
  },
  {
    slideType: Website,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      ratio: "2984/1848",
      image: {
        url: "/hva-no-css.jpeg",
        alt: "HvA",
      },
      notes: `
      <p>And here's that same random website without any added CSS, not much worse than the version with CSS to be honest. But still a bit less usable.</p>
      `,
    },
  },
  {
    slideType: TextColumns,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      customPill: {
        text: "EXPOSJOO",
        color: "var(--c-highlight)",
        background: "var(--c-text)",
        position: "top left",
      },
      columns: [
        {
          width: "70%",
          title: {
            content: "CSS",
            level: 2,
            classes: "xlarge-heading",
          },
          text: {
            content: `
            <ul>
              <li class="fragment">Colors, fonts, margins, padding, etc..</li>
              <li class="fragment">Layouts like flexbox and grid</li>
              <li class="fragment">Animations and transitions</li>
              <li class="fragment">Responsive design</li>
              <li class="fragment">User interaction and context</li>
            </ul>
            `,
            classes: "small-heading",
          },
        },
      ],
      notes: `
      <ul>
        <li>So, CSS adds style to your HTML</li>
        <li>It adds colors, fonts, margins, padding, etc..</li>
        <li>Layouts like flexbox and grid</li>
        <li>Animations and transitions</li>
        <li>Responsive design</li>
        <li>And we can style based on user interaction and context</li>
      </ul>
      `,
    },
  },
  {
    slideType: TextColumns,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      customPill: {
        text: "EXPOSJOO",
        color: "var(--c-highlight)",
        background: "var(--c-text)",
        position: "top left",
      },
      columns: [
        {
          width: "70%",
          title: {
            content: "User interaction & context",
            level: 2,
            classes: "large-heading",
          },
          text: {
            content: `
            <ul>
              <li class="fragment"><pre>:hover, :focus, :focus-within, :focus-visible</pre></li>
              <li class="fragment"><pre>:active, :invalid, :checked, :disabled, :placeholder-shown</pre></li>
              <li class="fragment"><pre>:nth-child(), :nth-of-type()</pre></li>
              <li class="fragment"><pre>:has(), :is(), :not(), :where()</pre></li>
            </ul>
            `,
            classes: "small-heading",
          },
        },
      ],
      notes: `<ul>
              <li><b>Styling based on user interaction</b> used to be quite limited, and was mostly focused (no pun intended) on selectors and not properties.</li>
              <li><b>We had the usual stuff like hover</b>, focus, and later focus-within, and focus visible to style elements </li>
              <li><b>For forms we had a lot of ways to send errors</b> when a user did something wrong</li>
              <li><b>For years we've been able to style elements based on their order in the DOM</b>, using :nth-child(), :nth-last-child(), :nth-of-type(), :nth-last-of-type()</li>
              <li><b>We recently got a lot of new pseudo classes to style based on content</b>, like :has(), :is(), :not(), :where(). Which is extremely powerful and finally allows us to kind of style parents and previous siblings based on their children</li>
              <li><b>For other types of user interaction, like scroll, mouse movement and page changes</b>, we we were forced to use JavaScript. Javascript is a much heavier language that has much more options than CSS to catch user interactions</li>
            </ul>`,
    },
  },
  {
    slideType: TextColumns,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      customPill: {
        text: "EXPOSJOO",
        color: "var(--c-highlight)",
        background: "var(--c-text)",
        position: "top left",
      },
      columns: [
        {
          width: "70%",
          title: {
            content: "2025 (and beyond)",
            level: 2,
            classes: "large-heading",
          },
          text: {
            content: `
            <ul>
              <li class="fragment"><pre>animation-timeline</pre> <span class="fragment color--purple">(❌ Safari, ❌ Firefox, Interop 2025)</span></li>
              <li class="fragment"><pre>::view-transition</pre> <span class="fragment color--purple">(❌ Firefox, Interop 2025)</span></li>
              <li class="fragment"><pre>pointer()?</pre> <span class="fragment color--purple">🚧 Working draft (<a href="https://drafts.csswg.org/pointer-animations-1/">https://drafts.csswg.org/pointer-animations-1/</a>)</span></li>
            </ul>
            `,
            classes: "small-heading",
          },
        },
      ],
      notes: `<ul>
              <li>But styling based on user interaction has made a kind of crazy turn</li>
              <li>Browsers have been working on scroll-driven animations in CSS, animation-timeline can now be used for CSS only scroll-driven animations. they are currently only supported in Chrome.</li>
              <li>View transitions are a new way to catch the page change event with CSS and style the transition between pages, but also animate other user interactions that don't refresh the page like filters and sorting.</li>
              <li>Pointer driven animations are a working draft that I'm very excited about, even less need for JavaScript.</li>
            </ul>`,
    },
  },
  {
    slideType: LargeTitle,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      customPill: {
        text: "EXPOSJOO",
        color: "var(--c-highlight)",
        background: "var(--c-text)",
        position: "top left",
      },
      title: {
        content: "Scroll driven animations",
        level: 2,
        classes: "xlarge-heading",
      },
      notes: `
      <p>
        Scroll animations have been around for years and are pretty much synonymous with Creative Development, but they have always required JavaScript to record the scroll position.
      </p>
      <p>
        This can cause some issues when done incorrectly, like; 
        <ul>
          <li>lagging animations</li>
          <li>heavy recalculations on resize</li>
          <li>heavy feeling websites overall</li>
          <li>unresponsive websites in slow internet environments</li>
          <li>and much more.</li>
        </ul>
      </p>`
    },
  },
  {
    slideType: Code,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    autoAnimate: true,
    data: {
      codeBlocks: [
        {
          dataId: "code",
          language: "css",
          code: `
          .element {
            animation: rotate 1s ease-out forwards;
          }
          `,
          highlight: true,
        },
      ],
      notes: `
      <p>
        Scroll driven animations rely on CSS keyframe animations, but in stead of time determining the progress of the animation....
      </p>`
    },
  },
  {
    slideType: Code,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      codeBlocks: [
        {
          dataId: "code",
          language: "css",
          code: `
          .element {
            animation-timeline: view();
            animation-name: rotate;
            animation-fill-mode: forwards;
            animation-timing-function: ease-out;
          }
          `,
          highlight: true,
        },
      ],
      notes: `
      <p>
        ...it’s the scroll position of the user.
        <br>
        Where we had 1s to let the browser know the animation should take 1 second, we now have the animation timeline property to let the browser know where to start and end the animation. 
      </p>`
    },
  },
  {
    slideType: Code,
    transition: "fade",
    data: {
      codeBlocks: [
        {
          language: "css",
          code: `
            .carousel {
              animation-timeline: scroll(x);
            }
            .img {
              animation-timeline: view();
            }
        `,
          highlight: true,
        },
      ],
      notes: `
      <p>
        At this moment there are two types of scroll based animations you can use in Chromium browsers; view- and scroll progress animations. 
      </p>
      <p>
        In short: scroll progress timelines have start and end values that are based on the start and end position of the scrollable container (the body by default). 
      </p>
      <p>
        And **view progress**' start and end values are determined by the element’s position in the viewport.
      </p>
      <p>
        Scroll progress timelines are perfect for scrollable carousels, if that's your thing, and view progress timelines are great for everything else.
      </p>
      `,
    },
  },
  {
    slideType: Code,
    transition: "fade",
    data: {
      codeBlocks: [
        {
          language: "css",
          code: `
          .parent {
            view-timeline-name: --parent;
          }
          .child {
            animation-timeline: --parent;
          }
          `,
          highlight: true,
        },
      ],
      notes: `
      <p>
        A very powerful feature of view progress timelines is the ability to animate elements using a parent element as the progress timeline.
      </p>
      `,
    },
  },
  {
    slideType: IFrame,
    transition: "fade",
    data: {
      title: "Parallax Scroll Driven Animations",
      url: "https://codepen.io/Sidstumple/pen/pvzKJvo",
      ratio: "14.5/9",
      qr: {
        title: "Parallax Scroll Driven Animations",
        qr: "ParallaxScrollDrivenAnimations",
      },
      notes: `
      <p>
        Back to the fun stuff; here is a codepen with a couple of parallax animations.
      </p>
      `
    },
  },
  {
    slideType: IFrame,
    transition: "fade",
    data: {
      title: "Reveal Animations",
      url: "https://codepen.io/Sidstumple/pen/KwPepLa",
      ratio: "14.5/9",
      qr: {
        title: "Reveal Animations",
        qr: "RevealAnimations",
      },
      notes: `
      <p>
        And here are some reveal animations I'd actually see creative developers use.
      </p>
      `
    },
  },
  {
    slideType: TextColumns,
    transition: "fade-in",
    autoAnimate: true,
    data: {
      columns: [
        {
          width: "70%",
          title: {
            dataId: "title",
            content: "<span>Works great</span> <span>👍</span>",
            level: 2,
            classes: "xlarge-heading",
          },
        },
      ],
      notes: `
      Right? 
      `,
    },
  },
  {
    slideType: TextColumns,
    transition: "fade-out",
    autoAnimate: true,
    data: {
      columns: [
        {
          width: "70%",
          title: {
            dataId: "title",
            content: "<span>Works great</span> <span>as long as:</span>",
            level: 2,
            classes: "xlarge-heading",
          },
          text: {
            content: `
            <ul>
              <li class="fragment">you’re animating HTML elements&nbsp;👍</li>
              <li class="fragment">you want an animation to play every time&nbsp;👍</li>
              <li class="fragment">you don’t need a scroll triggered animation&nbsp;👍</li>
            </ul>
            `,
            classes: "small-heading",
          },
        },
      ],
      notes: `
      <ul>
        <li>as long as you’re animating HTML elements and not for example JavaScript stuff on the canvas.</li>
        <li>as long as you want an animation to play every time you scroll past it</li>
        <li>as long as you don’t need a scroll triggered animation, thats an animation that plays on a specific scroll position in stead of a percentage of the scroll.</li>
      </ul>
      `,
    },
  },
  
  {
    slideType: LargeTitle,
    transition: "fade",
    data: {
      title: {
        content: "View transitions",
        level: 2,
        classes: "xlarge-heading",
      },
    },
    notes: `
    <p>
      View transitions are basically a way to 'automagically' animate between two states.
    </p>
        `
  },
  {
    slideType: IFrame,
    transition: "fade",
    data: {
      title: "Simple View Transitions",
      url: "https://sidstumple.github.io/view-transitions/",
      ratio: "14.5/9",
      notes: `
      <p>
        In its simplest form view transitions can add crossfades to your pages [show!]
      </p>
      <p>
        or move the page around to give an app like feel [show]
      </p>
      `,
    },
  },
  {
    slideType: Website,
    transition: "fade",
    data: {
      video: "/videos/rotgans.mp4",
      ratio: "1452/884",
      controls: {
        "data-autoplay": true,
        loop: true,
        muted: true,
        controls: true,
      },
      notes: `
      <p>
        In its most complicated form we can do stuff like this. [example].
      </p>
      <p>
        This is a project I'm still working on for Dutch Photographer Michiel Rotgans, it's designed by Tim Borst.
      </p>
      <p>
        View transitions are basically animations between two states, this can be used for things like transitions between pages or filtering/sorting stuff for example.
      </p>
      `,
    },
  },
  {
    slideType: LargeTitle,
    transition: "fade",
    data: {
      title: {
        content: "SPAs & MPAs",
        level: 2,
        classes: "xlarge-heading",
      },
      notes: `  
      <p>
        View transitions used to be only available on SPAs (Single page apps), which are apps that handle routing (or changing pages) with JavaScript in stead of just links.
      </p>
      <p>
        They are now also available on, what browsers call MPAs (Multiple Page Apps), or what we used to call them...
      </p>
      `,
    },
  },
  {
    slideType: LargeTitle,
    transition: "fade",
    data: {
      title: {
        content: "RFWs",
        level: 2,
        classes: "xlarge-heading",
      },
    },
  },
  {
    slideType: Code,
    transition: "fade",
    data: {
      codeBlocks: [
        {
          language: "css",
          highlight: '',
          code: `
          @view-transition {
            navigation: auto;
          }
          `,
        },
        {
          language: "js",
          highlight: '',
          code: `
          document.startViewTransition(() => {
            filterItems();
          });
          `,
        }
      ],
      notes: `
      <p>
        All you need to do, to make the simplest form of view transitions work between your pages, is just add this block of CSS:
        This will add a nice crossfade to all your pages.
      </p>
      <p>
        You can also initiate a view transition with JavaScript, this is very useful if you want to do something like filtering or sorting.
      </p>
      `,
    },
  },
  {
    slideType: Website,
    transition: "fade",
    data: {
      video: "/videos/vt-simple.mp4",
      ratio: "16/9",
      controls: {
        loop: true,
        muted: true,
        controls: true,
      },
      notes: `
      <p>So what happens when you use view transitions?</p>
      <ol>
        <li>when you navigate to a new page the browser takes a snapshot of the current state</li>
        <li>It takes a snapshot of the end state</li>
        <li>It calculates if there are any changes in position, rotation or size</li>
        <li>And it transforms and cross fades between the two states.</li>
      </ol>
      `,
    },
  },
  {
    slideType: LargeTitle,
    transition: "fade",
    data: {
      title: {
        content: "<a href='https://sidstumple.github.io/view-transitions/'>example</a>",
        level: 2,
        classes: "xlarge-heading",
      },
    },
  },
  {
    slideType: Website,
    transition: "fade",
    data: {
      video: "/videos/vt-hard.mp4",
      ratio: "16/9",
      controls: {
        loop: true,
        muted: true,
        controls: true,
      },
      notes: `
      <p>
        By default view transitions only make a snapshot of the root element. But by adding a view transition name to other elements, we can make it take a snapshot of any element.
      </p>
      <p> 
        If that element is persistent on both pages or states it will automatically animate between the two states.
      </p>
      `,
    },
  },
  {
    slideType: Code,
    transition: "fade",
    autoAnimate: true,
    data: {
      codeBlocks: [
        {
          language: "html",
          highlight: '',
          code: `
          <img src="example.jpg">
          `,
        },
        {
          language: "scss",
          highlight: '',
          code: `
            img {
              view-transition-name: image;
            }
          `,
        }
      ],
      notes: `
        <p>
          You can add items to the ::view-transition pseudo element by using view-transition-name. 
        </p>
        <p>
          This name needs to be unique, there can't be more than one element with the same name on the same page.
        </p>
        `,
    }
  },
  {
    slideType: Code,
    transition: "fade",
    autoAnimate: true,
    data: {
      codeBlocks: [
        {
          language: "html",
          highlight: '1-3|1',
          code: `
          <img src="example.jpg" style="--vt: image-1">
          <img src="example.jpg" style="--vt: image-2">
          <img src="example.jpg" style="--vt: image-3">
          `,
        },
        {
          language: "scss",
          highlight: '1-15|2|5-7',
          code: `
            img {
              view-transition-name: var(--vt);
            }

            ::view-transition-old(image-1) {
              animation: none;
            }

            ::view-transition-old(image-2) {
              animation: none;
            }

            ::view-transition-old(image-3) {
              animation: none;
            }
          `,
        },
      ],
      notes: `
        <p>
          But what if we have multiple images? Well they still need a unique view transitions name.
        </p>
        <p>
          [next]<br>
          Easiest thing to do if you're using a CMS anyway, is to use the ID of the item as the view transition name, otherwise you can just number them like here. 
          </p>
          <p>
          [next]<br>
          I'm using a css variable named --vt to set the view transition name for each image, otherwise your code becomes super long and tailwindy.
        </p>
        <p>
          [next]<br>
          As you can see in this example, I'm repeating the same code for each image and that's completely unmaintainable, thankfully, browsers agreed...
        </p>
        `,
    }
  },
  {
    slideType: Code,
    transition: "fade",
    autoAnimate: true,
    data: {
      codeBlocks: [
        {
          language: "html",
          highlight: '',
          code: `
            <img src="example.jpg" style="--vt: image-1">
            <img src="example.jpg" style="--vt: image-2">
            <img src="example.jpg" style="--vt: image-3">
          `,
        },
        {
          language: "scss",
          highlight: '1-15|3|6-8',
          code: `
            img {
              view-transition-name: var(--vt);
              view-transition-class: image;
            }

            ::view-transition-old(.image) {
              animation: none;
            }
          `,
        },
      ],
      notes: `
        <p>
          So they came up with view transition class
        </p>
        <p>
          [next]<br>
          which we can set on the img selector and use to add the same styles to all images.
        </p>
        `,
    }
  },
  {
    slideType: Code,
    transition: "fade",
    autoAnimate: false,
    data: {
      codeBlocks: [
        {
          language: "html",
          highlight: '',
          code: `
          <img src="example.jpg">
          <img src="example.jpg">
          <img src="example.jpg">
          `,
        },
        {
          language: "scss",
          highlight: '1-8|2,',
          code: `
            img {
              view-transition-name: match-element;
              view-transition-class: image;
            }

            ::view-transition-old(.image) {
              animation: none;
            }
          `,
        },
      ],
      notes: `
        <p>
          But, even more exciting, for same-document view transitions we can now use match-element in chrome and then the browser figures stuff out itself.
          <br> 
          <strong>
            Which means we don't have to set a unique view transition name anymore.
          </strong>
        </p>
        `,
    }
  },
  {
    slideType: IFrame,
    transition: "fade",
    data: {
      title: "Sorting and filtering",
      url: "https://codepen.io/Sidstumple/pen/NPPObPb",
      ratio: "14.5/9",
      qr: {
        title: "Sorting and filtering",
        qr: "SortingFiltering",
      },
      notes: `  
      <p>
        But what <i>can</i> you do using view transitions?
      </p>
      <p>
        We can use it to sort and filter items.
      </p>
      <p>
        vt name
      </p>
      <p>
        only child thing
      </p>
      `
    }
  },
  {
    slideType: LargeTitle,
    transition: "fade",
    data: {
      title: {
        content: "Production?",
        level: 2,
        classes: "xlarge-heading",
      },
      notes: `
      <p>
        So, I've shown you a lot of cool stuff that's coming to CSS, but is it production ready?
      </p>
      <p>
        Well, it depends, people often think that for a feature to be production ready, it needs to be supported by all major browsers.
      </p>
      <p>
        But if you use it as an enhancement and not a core feature, you can use it in production today.
      </p>
      `
    },
  },
  {
    slideType: Code,
    transition: "fade",
    data: {
      codeBlocks: [
        {
          language: "javascript",
          code: `
            // Fallback in JS
            if (!CSS.supports('animation-timeline')) {
              // fallback with GSAP for example
            }
            `,
          highlight: true,
        },
        {
          language: "css",
          code: `
            .element {
              animation-timeline: view();
            }
            @supports (animation-timeline: view()) {
              .element {
                animation-name: rotate;
              }
            }
            `,
          highlight: true,
        },
      ]
    },
    notes: `
    <p>
      Here's a way to check with Javascript if a CSS feature is supported, you can use GSAP scroll trigger if it's not for example.
    </p>
    <p>
      And here's a way to check with CSS if a feature is supported, you can use the @supports rule. You can use it to only add the animation if the browser supports it, so it won't just play, although playing it once is sometimes also a fine animation.
    </p>
    `
  },
  
];

