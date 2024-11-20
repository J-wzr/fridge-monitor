<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-tabs>
        <q-route-tab icon="map" to="/your/route" replace label="One Tab" />
        <q-route-tab
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs>
    </q-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>
