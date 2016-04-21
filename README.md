# scrolleffects

Micro-Framework that uses scrollmagic.io to animate elements with Sass.

## Example-Usage

The ```@mixin animatable($animations: (), $transition-duration: 500ms){...}``` sets and controls properties of an element that needs to be animated. It accepts a map as a parameter to build the animation-classes.

The passed map needs to be structured in a specific way, like so:

```scss
$my-map: (
	[my-property]: [start-values] [finished-values],
	...
);
```

Demo-usage with a configuration-map

```scss
$animations: (
	transform: (translate3d(0, 50%, 0) scale(2)) (translate3d(0, 0, 0) scale(1)),
	color: red blue,
	background: hotpink yellow,
);

.my-element {
	@include animatable($animations)
}
```

Results in 

```css
.animatable {
	transition: transform 500ms, color 500ms, background 500ms;
	transform: translate3d(0, 50%, 0) scale(2);
	color: red;
	background: hotpink;
}

.animatable.animated {
	transform: translate3d(0, 0, 0) scale(1);
	color: blue;
	background: yellow;
}

```