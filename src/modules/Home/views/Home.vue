<script setup>
import { ref, onMounted, watch, computed } from "vue";
import BackIcon from "../../../Shared/components/BackIcon.vue";

/* Modo 0 = 0, 1 = register, 2 = login */
const viewMode = ref(1);
const viewPhase = ref(7);
const newRegister = ref({
  extension: "",
  phone: "",
  password: "",
  birthdate: "",
  name: "",
  gender: "",
  experience: [],
  softSkills: [],
  hardSkills: [],
  jobPreferences: [],
  contact: {
    email: "",
    linkedin: "",
    github: "",
  },
});

const loadStatus = computed(() => {
  switch (viewPhase.value) {
    case 0:
      return "w-[10%]";
    case 1:
      return "w-[20%]";
    case 2:
      return "w-[30%]";
    case 3:
      return "w-[40%]";
    case 4:
      return "w-[50%]";
    case 5:
      return "w-[60%]";
    case 6:
      return "w-[70%]";
    case 7:
      return "w-[80%]";
    case 8:
      return "w-[90%]";
    case 9:
      return "w-[100%]";
    default:
      return "w-[10%]";
  }
});

const titlePhase = computed(() => {
  switch (viewPhase.value) {
    case 0:
      return "Mi numero es";
    case 1:
      return "Ingresa tu contraseña";
    case 2:
      return "Mi fecha de nacimiento es";
    case 3:
      return "Mi nombre es";
    case 4:
      return "Me identifico como";
    case 5:
      return "Experiencia laboral";
    case 6:
      return "Habilidades blandas";
    case 7:
      return "Habilidades técnicas";
    case 8:
      return "Preferencias laborales";
    case 9:
      return "Contacto";
    default:
      return "Mi numero es";
  }
});

/* TEST */
const softSkillsList = ref([
  "Comunicación",
  "Trabajo en equipo",
  "Adaptabilidad",
  "Resolución de problemas",
  "Creatividad",
  "Liderazgo",
  "Gestión del tiempo",
  "Pensamiento crítico",
  "Empatía",
  "Ética laboral",
]);

const hardSkillsList = ref([
  "JavaScript",
  "Vue.js",
  "SQL",
  "Git",
  "APIs REST",
  "AWS",
  "CyberSecurity",
  "CI/CD",
  "Flutter",
  "Python",
]);
/* TEST */

watch(viewMode, (value) => {
  console.log("Se cambió el valor del viewMode: " + value);
});

watch(newRegister, (value) => {
  console.log("Se cambió el valor del newRegister: " + JSON.stringify(value));
});
</script>

<template>
  <div
    v-if="viewMode == 0"
    class="background min-h-screen flex items-center justify-evenly flex-col-reverse gap-4"
  >
    <div class="flex flex-col gap-4 w-full px-32">
      <button class="btnLogin" @click="viewMode = 2">Sign In</button>
      <button class="btnLogin" @click="viewMode = 1">Sign Up</button>
    </div>
    <div></div>
    <h1 class="title">Linker</h1>
    <div></div>
  </div>

  <div
    v-else
    class="backgroundAuth min-h-screen flex flex-col items-center justify-start"
  >
    <!-- Componente de carga -->
    <div class="flex flex-col h-2 w-full mt-24 bg-white">
      <div class="flex bg-red-600 h-2" :class="loadStatus"></div>
    </div>
    <!-- Fin componente de carga -->

    <main class="grow w-full p-8 flex">
      <!-- Formulario -->
      <section class="grow">
        <BackIcon @click="viewMode = 0" />

        <div class="w-full p-16">
          <div class="grow flex flex-col gap-16">
            <h1 class="title">{{ titlePhase }} {{ viewPhase }}</h1>

            <!-- Fase 0 -->
            <div v-if="viewPhase == 0" class="grow flex flex-col gap-16">
              <div class="flex grow gap-8">
                <input
                  type="number"
                  placeholder="52"
                  class="w-32 telInput"
                  v-model.number="newRegister.extension"
                />
                <input
                  type="number"
                  placeholder="9984233521"
                  class="grow telInput"
                  v-model.number="newRegister.phone"
                />
              </div>
              <p class="text-gray-500 text-2xl italic">
                La verdad no vamos a verificar los números, confiamos en
                nuestros usuarios y que ellos son capaces de no poner número
                teléfonicos duplicados o de otras personas. Gracias.
              </p>

              <button class="btnTel" @click="viewPhase = 1">Continuar</button>
            </div>
            <!-- Fin Fase 0 -->

            <!-- Fase 1 -->
            <div v-if="viewPhase == 1" class="grow flex flex-col gap-16">
              <div class="flex grow gap-8">
                <input
                  type="password"
                  placeholder="Contraseña"
                  class="grow telInput"
                  v-model="newRegister.password"
                />
              </div>
              <p v-if="false" class="text-red-500 text-2xl italic">
                La contraseña debe ser de al menos 8 caracteres y contener al
                menos un número y una letra.
              </p>

              <button class="btnTel" @click="viewPhase = 2">Continuar</button>
            </div>
            <!-- Fin Fase 1 -->

            <!-- Fase 2 -->
            <div v-if="viewPhase == 2" class="grow flex flex-col gap-16">
              <div class="flex justify-center gap-8 w-full">
                <input
                  type="date"
                  class="telInput"
                  v-model.number="newRegister.birthdate"
                />
              </div>
              <p class="text-gray-500 text-2xl italic">
                Tu edad será pública. Esta configuración se puede cambiar (No
                por ahora lol)
              </p>

              <button class="btnTel" @click="viewPhase = 3">Continuar</button>
            </div>
            <!-- Fin Fase 2 -->

            <!-- Fase 3 -->
            <div v-if="viewPhase == 3" class="grow flex flex-col gap-16">
              <div class="flex grow gap-8">
                <input
                  placeholder="Lalo Chan G"
                  class="grow telInput"
                  v-model.number="newRegister.name"
                />
              </div>
              <p class="text-gray-500 text-2xl italic">
                Este nombre será público. Con el podrán encontrarte.
              </p>

              <button class="btnTel" @click="viewPhase = 4">Continuar</button>
            </div>
            <!-- Fin Fase 3 -->

            <!-- Fase 4 -->
            <div v-if="viewPhase == 4" class="grow flex flex-col gap-16">
              <div class="flex grow gap-8">
                <div class="grow flex flex-col gap-10 mb-16">
                  <button
                    class="btnGenre"
                    @click="newRegister.gender = 'Hombre'"
                  >
                    Hombre
                  </button>
                  <button
                    class="btnGenre"
                    @click="newRegister.gender = 'Mujer'"
                  >
                    Mujer
                  </button>
                  <button
                    class="btnGenre"
                    @click="newRegister.gender = 'No especificado'"
                  >
                    Prefiero no decirlo
                  </button>
                </div>
              </div>

              <button class="btnTel" @click="viewPhase = 5">Continuar</button>
            </div>
            <!-- Fin Fase 4 -->

            <!-- Fase 5 -->
            <div v-if="viewPhase == 5" class="grow flex flex-col gap-16">
              <div class="flex grow gap-8">
                <div class="grow flex flex-col gap-16 mb-16">
                  <div class="flex w-full flex-col gap-4">
                    <span class="text-4xl font-bold text-white">
                      ¿Cuántos años de experiencia profesional tienes?
                    </span>
                    <input
                      type="number"
                      min="0"
                      class="grow border-2 border-[#3C444F] bg-black border-b-2 text-white text-3xl py-6 px-8"
                    />
                  </div>
                  <div class="flex w-full flex-col gap-4">
                    <span class="text-4xl font-bold text-white">
                      ¿Cuál fue tu último cargo o puesto?
                    </span>
                    <input
                      type="text"
                      class="grow border-2 border-[#3C444F] bg-black border-b-2 text-white text-3xl py-6 px-8"
                    />
                  </div>
                  <div class="flex w-full flex-col gap-4">
                    <span class="text-4xl font-bold text-white">
                      ¿En qué industria has trabajado más tiempo?
                    </span>
                    <input
                      type="text"
                      class="grow border-2 border-[#3C444F] bg-black border-b-2 text-white text-3xl py-6 px-8"
                    />
                  </div>
                  <div
                    class="flex w-full flex-row gap-4 justify-between items-center"
                  >
                    <span class="text-4xl font-bold text-white">
                      ¿Has gestionado equipos de trabajo?
                    </span>
                    <!-- Checkbox, no tocar -->
                    <label
                      class="relative inline-flex items-center cursor-pointer"
                    >
                      <input type="checkbox" class="hidden" />
                      <div
                        class="w-24 h-14 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center transition-all duration-200"
                        :class="true ? 'border-[#7239c7]' : ''"
                      >
                        <svg
                          v-if="true"
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-16 text-[#7239c7]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </label>
                    <!-- Final Checkbox -->
                  </div>
                </div>
              </div>

              <div class="flex flex-col gap-8 items-center">
                <button class="btnTel w-full" @click="viewPhase = 6">
                  Continuar
                </button>
                <button class="btnSkip" @click="viewPhase = 6">Saltar</button>
              </div>
            </div>
            <!-- Fin Fase 5 -->

            <!-- Fase 6 -->
            <div v-if="viewPhase == 6" class="grow flex flex-col gap-16">
              <div class="flex grow gap-8">
                <div
                  class="grow flex flex-row flex-wrap justify-center gap-4 mb-16 max-h-[864px] overflow-y-scroll"
                >
                  <span class="skill" v-for="skill in softSkillsList">
                    {{ skill }}
                  </span>
                  <span class="skill" v-for="skill in softSkillsList">
                    {{ skill }}
                  </span>
                  <span class="skill" v-for="skill in hardSkillsList">
                    {{ skill }}
                  </span>
                  <span class="skill" v-for="skill in softSkillsList">
                    {{ skill }}
                  </span>
                  <span class="skill" v-for="skill in hardSkillsList">
                    {{ skill }}
                  </span>
                  <span class="skill" v-for="skill in hardSkillsList">
                    {{ skill }}
                  </span>
                </div>
              </div>

              <div class="flex flex-col gap-8 items-center">
                <button class="btnTel w-full" @click="viewPhase = 7">
                  Continuar (0/5)
                </button>
              </div>
            </div>
            <!-- Fin Fase 6 -->

            <!-- Fase 7 -->
            <div v-if="viewPhase == 7" class="grow flex flex-col gap-16">
              <div class="flex grow gap-8">
                <div
                  class="grow flex flex-row flex-wrap justify-center gap-4 mb-16 max-h-[864px] overflow-y-scroll"
                >
                  <span class="skill" v-for="skill in softSkillsList">
                    {{ skill }}
                  </span>
                  <span class="skill" v-for="skill in softSkillsList">
                    {{ skill }}
                  </span>
                  <span class="skill" v-for="skill in hardSkillsList">
                    {{ skill }}
                  </span>
                  <span class="skill" v-for="skill in softSkillsList">
                    {{ skill }}
                  </span>
                  <span class="skill" v-for="skill in hardSkillsList">
                    {{ skill }}
                  </span>
                  <span class="skill" v-for="skill in hardSkillsList">
                    {{ skill }}
                  </span>
                </div>
              </div>

              <div class="flex flex-col gap-8 items-center">
                <button class="btnTel w-full" @click="viewPhase = 8">
                  Continuar (0/5)
                </button>
              </div>
            </div>
            <!-- Fin Fase 7 -->

            <!-- Fase 8 -->
            <div v-if="viewPhase == 8" class="grow flex flex-col gap-16">
              <div class="flex grow gap-8">
                <div class="grow flex flex-col gap-16 mb-16">
                  <div class="flex w-full flex-col gap-4">
                    <span class="text-4xl font-bold text-white">
                        ¿Qué modalidad de trabajo prefieres?
                    </span>
                    <input
                      type="number"
                      min="0"
                      class="grow border-2 border-[#3C444F] bg-black border-b-2 text-white text-3xl py-6 px-8"
                    />
                  </div>
                  <div class="flex w-full flex-col gap-4">
                    <span class="text-4xl font-bold text-white">
                      ¿Cuál es tu espectativa salarial mensual (neta)?
                    </span>
                    <input
                      type="text"
                      class="grow border-2 border-[#3C444F] bg-black border-b-2 text-white text-3xl py-6 px-8"
                    />
                  </div>
                  <div class="flex w-full flex-col gap-4">
                    <span class="text-4xl font-bold text-white">
                      ¿Estás dispuesto a mudarte por trabajo?
                    </span>
                    <input
                      type="text"
                      class="grow border-2 border-[#3C444F] bg-black border-b-2 text-white text-3xl py-6 px-8"
                    />
                  </div>
                  <div class="flex w-full flex-col gap-4">
                    <span class="text-4xl font-bold text-white">
                        ¿Has tenido un puesto superior antes?
                    </span>
                    <input
                      type="text"
                      class="grow border-2 border-[#3C444F] bg-black border-b-2 text-white text-3xl py-6 px-8"
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-col gap-8 items-center">
                <button class="btnTel w-full" @click="viewPhase = 9">
                  Continuar
                </button>
              </div>
            </div>
            <!-- Fin Fase 8 -->

            <!-- Fase 9 -->
            <div v-if="viewPhase == 9" class="grow flex flex-col gap-16">
              <div class="flex grow gap-8">
                <div class="grow flex flex-col gap-16 mb-16">
                  <div class="flex w-full flex-col gap-4">
                    <span class="text-4xl font-bold text-white">
                        Sube tu CV
                    </span>
                    <input
                      type="number"
                      min="0"
                      class="grow border-2 border-[#3C444F] bg-black border-b-2 text-white text-3xl py-6 px-8"
                    />
                  </div>
                  <div class="flex w-full flex-col gap-4">
                    <span class="text-4xl font-bold text-white">
                      Linkedin
                    </span>
                    <input
                      type="text"
                      class="grow border-2 border-[#3C444F] bg-black border-b-2 text-white text-3xl py-6 px-8"
                    />
                  </div>
                  <div class="flex w-full flex-col gap-4">
                    <span class="text-4xl font-bold text-white">
                      GitHub
                    </span>
                    <input
                      type="text"
                      class="grow border-2 border-[#3C444F] bg-black border-b-2 text-white text-3xl py-6 px-8"
                    />
                  </div>
                  <div class="flex w-full flex-col gap-4">
                    <span class="text-4xl font-bold text-white">
                        Portafolio
                    </span>
                    <input
                      type="text"
                      class="grow border-2 border-[#3C444F] bg-black border-b-2 text-white text-3xl py-6 px-8"
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-col gap-8 items-center">
                <button class="btnTel w-full" @click="viewPhase = 9">
                  Continuar
                </button>
              </div>
            </div>
            <!-- Fin Fase 9 -->
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.background {
  @apply bg-[linear-gradient(45deg,_#3B0191,_#240151)];
}
.backgroundAuth {
  background: #111418;
}
.btnLogin {
  @apply border-white border-2 font-bold uppercase text-white px-6 py-4 rounded-full tracking-[0.5em];
}
.btnTel {
  @apply bg-[linear-gradient(45deg,_#3B0191,_#240151)] font-bold uppercase text-white p-8 rounded-full tracking-[0.75em] text-2xl;
}
.btnGenre {
  @apply bg-white p-4 py-6 rounded-full text-2xl font-bold tracking-[0.5em] uppercase hover:bg-[linear-gradient(45deg,_#3B0191,_#240151)] hover:text-white transition-all duration-200;
}
.btnSkip {
  @apply bg-transparent font-semibold text-white p-4 rounded-full tracking-[0.5em] text-2xl;
}
.skill {
  @apply bg-transparent border border-white uppercase px-8 py-2 text-white text-xl font-semibold tracking-[0.25em] w-max rounded-full;
  @apply transition-all duration-200 hover:bg-white hover:text-black;
}
.title {
  @apply text-8xl text-white tracking-widest font-semibold text-center;
}
.telInput {
  @apply text-4xl font-semibold tracking-[0.5em] text-white bg-transparent p-4 rounded-none outline-none border-b border-white focus:border-b-[3px] transition-all duration-200;
}
</style>
