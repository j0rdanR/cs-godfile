<script>
  import { page } from '$app/stores';
  import { statusToError } from '$lib/friendlyErrors';
</script>

<div class="prose p-8 mx-auto">
  <h1>{statusToError($page.status)}</h1>
  <p>{$page.error.message}</p>
</div>