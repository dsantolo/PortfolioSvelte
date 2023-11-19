<script lang="ts">
  import cn from 'classnames';
  export let open = false;
</script>

{#key open}
  <div
    class={cn('animate-fade animate-duration-[250ms]', {
      '-z-10 animate-reverse': open,
    })}
  >
    <div
      class={cn(
        'name:name-container font-comfortaa via-12% via-12% flex h-[7vh] w-screen flex-col items-center justify-center bg-gradient-to-l from-red-700 from-5% via-gray-300 to-slate-700 to-95% bg-[percentage:500%] text-2xl font-thin hover:animate-fade-right hover:bg-gradient-to-r hover:from-black hover:via-slate-700 hover:to-white hover:bg-cover hover:text-white hover:animate-normal hover:animate-duration-500 hover:animate-ease-in sm:text-4xl',
        {
          'animate-gradientflow': !open,
        },
      )}
      role="button"
      tabindex="0"
    >
      <h1>Derek Santolo</h1>
    </div>
  </div>
{/key}
