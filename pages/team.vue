<template>
  <div>
    <TeamBlock/>
<!--    <Network/>-->
  </div>
</template>

<script>
import TeamBlock from "../components/blocks/TeamBlock";
import Network from "../components/Network";
export default {
  name: "team",
  components: {Network, TeamBlock}
}
</script>
