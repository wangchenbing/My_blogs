import {
  LockIcon
} from "./chunk-4ZT4TUVR.js";
import {
  useThemeData,
  useThemeLocaleData
} from "./chunk-U5WRW4JM.js";
import {
  client_exports
} from "./chunk-FECFGNAG.js";
import {
  useRoute
} from "./chunk-U27KJSRC.js";
import {
  useSessionStorage,
  useStorage
} from "./chunk-32MHHBEF.js";
import {
  computed,
  defineComponent,
  h,
  nextTick,
  ref
} from "./chunk-4YVVQK3V.js";
import {
  w
} from "./chunk-BGOVVDTY.js";

// node_modules/vuepress-theme-hope/lib/client/modules/encrypt/components/PasswordModal.js
import "/Users/wangchenbing/Desktop/My_blogs/node_modules/vuepress-theme-hope/lib/client/modules/encrypt/styles/password-modal.scss";
var PasswordModal_default = defineComponent({
  name: "PasswordModal",
  props: {
    full: Boolean
  },
  emits: ["verify"],
  setup(props, { emit }) {
    const frontmatter = (0, client_exports.usePageFrontmatter)();
    const themeLocale = useThemeLocaleData();
    const password = ref("");
    const hasTried = ref(false);
    const remember = ref(false);
    const locale = computed(() => themeLocale.value.encryptLocales);
    let hintHandler = null;
    const verify = () => {
      if (hintHandler)
        clearTimeout(hintHandler);
      hasTried.value = false;
      emit("verify", password.value, remember.value);
      void nextTick().then(() => {
        hasTried.value = true;
        hintHandler = setTimeout(() => {
          hasTried.value = false;
        }, 1e3);
      });
    };
    return () => h("div", {
      class: [
        "password-layer",
        { expand: props.full || frontmatter.value["home"] }
      ]
    }, h("div", { class: "password-modal" }, [
      h("div", { class: ["hint", { tried: hasTried.value }] }, hasTried.value ? locale.value.errorHint : h(LockIcon, { "aria-label": locale.value.iconLabel })),
      h("div", { class: "password" }, [
        h("input", {
          type: "password",
          value: password.value,
          placeholder: locale.value.placeholder,
          onInput: ({ target }) => {
            password.value = target.value;
          },
          onKeydown: ({ key }) => {
            if (key === "Enter")
              verify();
          }
        })
      ]),
      h("div", { class: "remember-password" }, [
        h("input", {
          type: "checkbox",
          value: remember.value,
          onChange: () => remember.value = !remember.value
        }),
        h("span", locale.value.remember)
      ]),
      h("button", { class: "submit", onClick: () => verify() }, "OK")
    ]));
  }
});

// node_modules/vuepress-theme-hope/lib/client/modules/encrypt/composables/utils.js
var useEncryptData = () => {
  const themeData = useThemeData();
  return computed(() => themeData.value.encrypt || {});
};

// node_modules/vuepress-theme-hope/lib/client/modules/encrypt/composables/global.js
var STORAGE_KEY = "VUEPRESS_HOPE_GLOBAL_TOKEN";
var useGlobalEcrypt = () => {
  const encryptData = useEncryptData();
  const localToken = useStorage(STORAGE_KEY, "");
  const sessionToken = useSessionStorage(STORAGE_KEY, "");
  const isGlobalEncrypted = computed(() => {
    if (encryptData.value.global && encryptData.value.admin) {
      if (localToken.value)
        return encryptData.value.admin.every((hash) => !w(localToken.value, hash));
      if (sessionToken.value)
        return encryptData.value.admin.every((hash) => !w(sessionToken.value, hash));
      return true;
    }
    return false;
  });
  const validateGlobalToken = (inputToken, keep = false) => {
    (keep ? localToken : sessionToken).value = inputToken;
  };
  return {
    isGlobalEncrypted,
    validateGlobalToken
  };
};

// node_modules/vuepress-theme-hope/lib/client/modules/encrypt/utils/checkToken.js
var checkToken = (token = "", hash) => Boolean(token) && w(token, hash);

// node_modules/vuepress-theme-hope/lib/client/modules/encrypt/composables/path.js
var STORAGE_KEY2 = "VUEPRESS_HOPE_PATH_TOKEN";
var usePathEncrypt = () => {
  const route = useRoute();
  const encryptData = useEncryptData();
  const localToken = useStorage(STORAGE_KEY2, {});
  const sessionToken = useSessionStorage(STORAGE_KEY2, {});
  const getPathMatchedKeys = (path) => typeof encryptData.value.config === "object" ? Object.keys(encryptData.value.config).filter((key) => decodeURI(path).startsWith(key)).sort((a, b) => b.length - a.length) : [];
  const getPathEncryptStatus = (path) => {
    const matchedKeys = getPathMatchedKeys(path);
    if (matchedKeys.length !== 0) {
      const { config = {} } = encryptData.value;
      return !matchedKeys.some((key) => localToken.value[key] && config[key].some((token) => checkToken(localToken.value[key], token)) || sessionToken.value[key] && config[key].some((token) => checkToken(sessionToken.value[key], token)));
    }
    return false;
  };
  const isEncrypted = computed(() => getPathEncryptStatus(route.path));
  const validateToken = (inputToken, keep = false) => {
    const { config = {} } = encryptData.value;
    const matchedKeys = getPathMatchedKeys(route.path);
    for (const hitKey of matchedKeys) {
      if (config[hitKey].filter((token) => checkToken(inputToken, token))) {
        (keep ? localToken : sessionToken).value[hitKey] = inputToken;
        break;
      }
    }
  };
  return {
    isEncrypted,
    getPathEncryptStatus,
    validateToken
  };
};

export {
  PasswordModal_default,
  useGlobalEcrypt,
  usePathEncrypt
};
//# sourceMappingURL=chunk-X3AHUUA5.js.map
