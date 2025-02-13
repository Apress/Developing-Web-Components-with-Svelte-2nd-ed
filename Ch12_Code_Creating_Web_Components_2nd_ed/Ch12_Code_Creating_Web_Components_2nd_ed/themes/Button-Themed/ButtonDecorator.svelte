<script>
	import Theme from '../Theme.svelte'

  let theme;
  theme = {primary: '0, 255, 0', smallBorder: '4px'};
</script>

<div>
  <Theme {...theme}>
    <slot />
  </Theme>
</div>