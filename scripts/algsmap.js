var pllMap = {
  1: [
    "R U R' U2 R' U' R U' R U' R' U2 R' U R",
  ],
  2: [
    "R' U' R U2' R U R' U R' U R U2' R U' R' ",
  ],
  3: [
    "R' U R' U' R U2' R U2 R2' U R2 U2 R' U2 R ",
  ],
  4: [
    "R' U2' R U2' R2' U' R2 U2' R' U2 R' U R U' R ",
  ],
  5: [
    "R U R' U2 R2 U2 R2' U' R U R U2' R' U2 R' ",
  ],
  6: [
    "R' U' R U2' R2' U2' R2 U R' U' R' U2 R U2' R ",
  ],
  7: [
    "R U R U R' U' R2 U R' U R U2' R' U' R' U' R U R' U' R'",
  ],
  8: [
    "R' U' R' U' R U R2' U' R U' R' U2 R U R U R' U' R U R",
  ],
  9: [
    "R U R' U2' R' U2' R U' R U R2' U2 R U2' R U2' R' ",
  ],
  10: [
    "R' U' R U2 R U2 R' U R' U' R2 U2' R' U2 R' U2 R",
  ],
  11: [
    "R' U2 R U R' U' R U2' R U2 R' U' R U' R' U R' U R",
  ],
  12: [
    "R U2' R' U' R U R' U2 R' U2' R U R' U R U' R U' R'",
  ],
  13: [
    "R2 U R2' U R U' R U R' U2' R' U2' R U R U' R' U R'",
  ],
  14: [
    "R2' U' R2 U' R' U R' U' R U2 R U2 R' U' R' U R U' R",
  ],
  15: [
    "R U2 R' U' R U' R' U2 R U2' R' U2' R U R' U' R U' R'",
  ],
  16: [
    "R' U2' R U R' U R U2' R' U2 R U2 R' U' R U R' U R",
  ],
  17: [
    "R' U2' R U2' R' U' R U R' U2' R' U2' R U' R' U2' R2",
  ],
  18: [
    "R U2 R' U2 R U R' U' R U2 R U2 R' U R U2 R2'",
  ],
  19: [
    "R U2' R' U2' R U R' U' R U' R' U R' U' R U' R' U2 R",
  ],
  20: [
    "R' U2 R U2 R' U' R U R' U R U' R U R' U R U2' R'",
  ],
  21: [
    "R' U2' R U R' U' R U' R' U2 R U2' R' U2' R",
  ],
  22: [
    "R U2 R' U' R U R' U R U2' R' U2 R U2 R'",
  ],
  23: [
    "R' U2' R U R2' U' R U' R' U R2 U' R' U R' U R U R",
  ],
  24: [
    "R' U R2' U2' R U' R' U R U' R' U R U' R' U2' R2 U' R",
  ],
  25: [
    "R' U2 R U2 R' U' R U R' U' R U R' U' R U' R' U2' R",
  ],
  26: [
    "R' U R U R2' U' R2 U2' R2' U2 R U' R' U2 R2",
  ],
  27: [
    "R U' R' U' R2 U R2' U2 R2 U2' R' U R U2' R2'",
  ],
  28: [
    "R U' R' U2' R U' R U R2' U2 R U2' R U' R' U' R'",
  ],
  29: [
    "R' U R U2 R' U R' U' R2 U2' R' U2 R' U R U R",
  ],
  30: [
    "R U R U R' U2 R' U2' R2 U' R' U R' U2 R U R'",
  ],
  31: [
    "R' U' R' U' R U2' R U2 R2' U R U' R U2' R' U' R ",
  ],
  32: [
    "R U2' R' U' R' U' R U2 R2' U' R' U' R' U R U R2' U2 R'",
  ],
  33: [
    "R' U2 R U R U R' U2' R2 U R U R U' R' U' R2 U2' R",
  ],
  34: [
    "R U2' R2 U' R' U' R U R U R2 U2' R' U R U R U2 R'",
  ],
  35: [
    "R' U2 R2' U R U R' U' R' U' R2' U2 R U' R' U' R' U2' R",
  ],
  36: [
    "R U R U R U R U R2 U' R' U' R2 U2 R2 U2 R' U' R'",
  ],
  37: [
    "R' U' R' U' R' U' R' U' R2' U R U R2' U2' R2' U2' R U R",
  ],
  38: [
    "R U R' U2' R U2 R' U' R2 U R' U R U2' R' U' R' U R U' R'",
  ],
  39: [
    "R' U' R U2 R' U2' R U R2' U' R U' R' U2 R U R U' R' U R",
  ],
  40: [
    "R' U' R' U2' R U R' U R U R U' R U R U R' U R U2' R' U' R'",
  ],
  41: [
    "R U R U2 R' U' R U' R' U' R' U R' U' R' U' R U' R' U2 R U R",
  ],
  42: [
    "R U' R U' R U R U R U' R' U' R' U' R U R U R U' R' U' R2' U R'",
  ],
  43: [
    "R' U R' U R' U' R' U' R' U R U R U R' U' R' U' R' U R U R2 U' R",
  ],
  44: [
    "R U2 R2' U' R2' U R U R' U' R' U' R2' U R' U R U' R U2' R'",
  ],
  45: [
    "R' U2' R2 U R2 U' R' U' R U R U R2 U' R U' R' U R' U2 R",
  ],
  46: [
    "R U2 R' U R' U' R U' R2 U R U R U' R' U' R2 U R2 U2' R'",
  ],
  47: [
    "R' U2' R U' R U R' U R2' U' R' U' R' U R U R2' U' R2' U2 R",
  ],
  48: [
    "R' U' R U' R' U2' R2 U R U2 R' U' R U' R' U' R2' U' R",
  ],
  49: [
    "R U R' U R U2 R2' U' R' U2' R U R' U R U R2 U R'",
  ],
  50: [
    "R U2 R2 U R U' R' U R2' U' R2 U' R U R' U' R2' U' R'",
  ],
  51: [
    "R' U2' R2' U' R' U R U' R2 U R2' U R' U' R U R2 U R",
  ],
  52: [
    "R U R' U R' U2 R U' R U' R' U R U R2' U' R U2' R U' R'",
  ],
  53: [
    "R' U' R U' R U2' R' U R' U R U' R' U' R2 U R' U2 R' U R",
  ],
  54: [
    "R U' R2' U' R U' R U R' U R U' R' U' R' U R U' R U2' R'",
  ],
  55: [
    "R' U R2 U R' U R' U' R U' R' U R U R U' R' U R' U2 R",
  ],
  56: [
    "R2 U R' U R' U R U2' R U' R' U2' R' U2' R U' R'",
  ],
  57: [
    "R2' U' R U' R U' R' U2 R' U R U2 R U2 R' U R",
  ],
  58: [
    "R2 U R' U' R' U R' U2 R2 U R' U R U' R U' R2' U R' U2 R",
  ],
  59: [
    "R2' U' R U R U' R U2' R2' U' R U' R' U R' U R2 U' R U2' R'",
  ],
  60: [
    "R' U2' R U' R2 U R' U R' U' R U' R2' U2' R U' R U R U' R2'",
  ],
  61: [
    "R U2 R' U R2' U' R U' R U R' U R2 U2 R' U R' U' R' U R2",
  ],
  62: [
    "R U R' U R U R' U R U' R' U' R U' R' U2 R U R' U' R U2 R'",
  ],
  63: [
    "R' U' R U' R' U' R U' R' U R U R' U R U2' R' U' R U R' U2' R",
  ],
  64: [
    "R U2' R' U R U2' R' U2 R U R' U2 R U' R' U2 R U' R'",
  ],
  65: [
    "R' U2 R U' R' U2 R U2' R' U' R U2' R' U R U2' R' U R",
  ],
  66: [
    "R' U' R' U2 R U' R2 U2' R U' R U R2' U' R U2' R2 U' R U R",
  ],
  67: [
    "R U2' R' U' R U' R' U R U2' R' U R' U' R U' R' U2 R",
  ],
  68: [
    "R' U2' R U' R' U R U' R U R2' U R U R U2 R' U' R' U R",
  ],
  69: [
    "R U2 R' U R U' R' U R' U' R2 U' R' U' R' U2' R U R U' R'",
  ],
  70: [
    "R' U' R' U' R U' R U' R' U R' U2 R U2 R U R' U2' R",
  ],
  71: [
    "R U R U R' U R' U R U' R U2' R' U2' R' U' R U2 R'",
  ],
  72: [
    "R' U2 R U' R' U' R U' R' U' R U2' R' U' R U R' U R U2' R' U' R",
  ],
  73: [
    "R U2' R' U R U R' U R U R' U2 R U R' U' R U' R' U2 R U R'",
  ],
  74: [
    "R U R U2 R2' U R U' R U' R' U R U2' R' U2' R' U' R U2 R'",
  ],
  75: [
    "R' U' R' U2' R2 U' R' U R' U R U' R' U2 R U2 R U R' U2' R",
  ],
  76: [
    "R U R' U2 R' U' R' U2' R2 U R2' U R2' U' R2' U2 R",
  ],
  77: [
    "R U R U R' U R U2 R' U2' R' U' R U2' R U R' U' R'",
  ],
  78: [
    "R' U' R' U' R U' R' U2' R U2 R U R' U2 R' U' R U R",
  ],
  79: [
    "R U2' R U2 R' U' R U2' R' U2' R U' R' U2' R U R' U' R'",
  ],
  80: [
    "R' U2 R' U2' R U R' U2 R U2 R' U R U2 R' U' R U R",
  ],
  81: [
    "R' F U F' R F U2 F' R' U F U F' U' F' U F R  ",
  ],
  82: [
    "R U R' U R U R' U2 R' U2 R U2 R' U R U2' R U' R'",
  ],
  83: [
    "R' U' R U' R' U' R U2' R U2' R' U2' R U' R' U2 R' U R",
  ],
  84: [
    "R U R' U2 R' U' R U2' R' U2' R U2' R U' R' U' R U' R'",
  ],
  85: [
    "R' U' R U2' R U R' U2 R U2 R' U2 R' U R U R' U R",
  ],
  86: [
    "R2' U R' U' R' U' R' U' R U2 R U R U' R U2 R U R' U2 R",
  ],
  87: [
    "R2 U' R U R U R U R' U2' R' U' R' U R' U2' R' U' R U2' R'",
  ],
  88: [
    "R2 U2 R2' U R U' R U' R U R2' U R U' R U' R' U' R2'",
  ],
  89: [
    "R2' U2' R2 U' R' U R' U R' U' R2 U' R' U R' U R U R2",
  ],
  90: [
    "R U2 R' U2' R U R U2 R' U R U2 R' U' R' U2' R U2 R'",
  ],
  91: [
    "R' U2' R U2 R' U' R' U2' R U' R' U2' R U R U2 R' U2' R",
  ],
  92: [
    "R' U' R' U' R2 U' R' U R' U R U R U R U2 R' U R U2 R'",
  ],
  93: [
    "R U R U R2' U R U' R U' R' U' R' U' R' U2' R U' R' U2' R",
  ],
  94: [
    "R U' R U R2' U2 R U' R' U' R2 U' R' U2' R' U R U2 R' ",
  ],
  95: [
    "R' U R' U' R2 U2' R' U R U R2' U R U2 R U' R' U2' R",
  ],
  96: [
    "R U2' R' U' R U2 R U R2' U R U R' U2' R2 U' R' U R'",
  ],
  97: [
    "R' U2 R U R' U2' R' U' R2 U' R' U' R U2 R2' U R U' R",
  ],
  98: [
    "R U' R2' U R U' R U2' R U R2 U' R' U' R U R' U' R' U2 R'",
  ],
  99: [
    "R' U R2 U' R' U R' U2 R' U' R2' U R U R' U' R U R U2' R",
  ],
  100: [
    "R U2' R U R U R2' U' R' U2 R' U R' U' R2 U R U R U' R2",
  ],
  101: [
    "R' U2 R' U' R' U' R2 U R U2' R U' R U R2' U' R' U' R' U R2'",
  ],
  102: [
    "R' U2' R U R' U R U R U' R' U2 R U R' U2 R U R'",
  ],
  103: [
    "R U2 R' U' R U' R' U' R' U R U2' R' U' R U2' R' U' R",
  ],
  104: [
    "R U' R' U' R U R U R2' U R U' R U R' U' R' U2 R2 U2 R2'",
  ],
  105: [
    "R' U R U R' U' R' U' R2 U' R' U R' U' R U R U2' R2' U2' R2",
  ],
  106: [
    "R' U R2 U R' U' R' U R U R U' R' U2' R' U' R U R' U' R",
  ],
  107: [
    "R U' R2' U' R U R U' R' U' R' U R U2 R U R' U' R U R'",
  ],
  108: [
    "R U R' U R U' R' U2 R U2 R' U2' R U R' U R U2' R'",
  ],
  109: [
    "R' U' R U' R' U R U2' R' U2' R U2 R' U' R U' R' U2 R",
  ],
  110: [
    "R' U' R' U2' R U' R' U2' R U R U' R' U R U2 R' U2 R",
  ],
  111: [
    "R U R U2 R' U R U2 R' U' R' U R U' R' U2' R U2' R'",
  ],
  112: [
    "R' U2' R U R' U R U' R U R' U R U' R' U2 R U2 R'",
  ],
  113: [
    "R U2 R' U' R U' R' U R' U' R U' R' U R U2' R' U2' R",
  ],
  114: [
    "R' U' R U R2 U R2' U' R' U R U R2 U' R2'",
  ],
  115: [
    "R' U2 R U' R' U2 R' U2 R U2' R U R' U' R' U R U' R",
  ],
  116: [
    "R U2' R' U R U2' R U2' R' U2 R' U' R U R U' R' U R'",
  ],
  117: [
    "R U2 R2 U2 R' U' R U' R' U' R' U2 R U' R' U R U R' U R'",
  ],
  118: [
    "R' U2' R2' U2' R U R' U R U R U2' R' U R U' R' U' R U' R",
  ],
  119: [
    "R' U' R U2 R' U' R U' R U R' U R' U R U2' R U' R2' U2 R",
  ],
  120: [
    "R U R' U2' R U R' U R' U' R U' R U' R' U2 R' U R2 U2' R'",
  ],
  121: [
    "R U2' R U R2' U R U' R U' R' U2 R' U' R U R'",
  ],
  122: [
    "R' U2 R' U' R2 U' R' U R' U R U2' R U R' U' R",
  ],
  123: [
    "R U' R' U2' R U R' U R' U' R2 U' R' U R' U R2 U R'",
  ],
  124: [
    "R' U R U2 R' U' R U' R U R2' U R U' R U' R2' U' R",
  ],
  125: [
    "R' U R U R' U R U' R U R' U2 R U2 R' U R' U' R",
  ],
  126: [
    "R U' R' U' R U' R' U R' U' R U2' R' U2' R U' R U R'",
  ],
  127: [
    "R' U2 R U' R U R2' U2 R U2' R U' R' U2' R' U R",
  ],
  128: [
    "R U2' R' U R' U' R2 U2' R' U2 R' U R U2 R U' R'",
  ],
  129: [
    "R' U' R' U' R U' R2 U R2 U R U R U2' R U' R'",
  ],
  130: [
    "R U R U R' U R2' U' R2' U' R' U' R' U2 R' U R",
  ],
  131: [
    "R U R' U2 R' U' R' U' R2' U' R2' U R' U R U R",
  ],
  132: [
    "R' U' R U2' R U R U R2 U R2 U' R U' R' U' R'",
  ],
  133: [
    "R' U' R U2' R2' U2' R2 U R' U2' R' U2' R U2 R",
  ],
  134: [
    "R U R' U R' U2' R2 U R2' U R2' U R' U R' U' R2 U' R' U' R'",
  ],
  135: [
    "R2' U R' U2 R' U' R2' U' R' U' R' U R' U R2 U R2 U' R2",
  ],
  136: [
    "R U R U' R' U R2' U2' R U' R' U2' R U' R U' R U R' U' R'",
  ],
  137: [
    "R' U2' R U R' U2' R U R' U2 R U R' U' R U' R' U2 R ",
  ],
  138: [
    "R2' U' R U2' R2' U R' U' R' U R2' U R' U R2' U' R' U' R U2 R'",
  ],
  139: [
    "R2 U R' U2 R2 U' R U R U' R2 U' R U' R2 U R U R' U2' R",
  ],
  140: [
    "R U R' U2 R U' R' U R U2 R' U R U2' R' U2' R U' R'",
  ],
  141: [
    "R' U' R U2' R' U R U' R' U2' R U' R' U2 R U2 R' U R",
  ],
  142: [
    "R' U' R U2' R U R' U R' U R' U2 R2 U R2' U2 R2 U' R U' R'",
  ],
  143: [
    "R U R' U2 R' U' R U' R U' R U2' R2' U' R2 U2' R2' U R' U R",
  ],
  144: [
    "R U R' U R2 U' R2 U' R U R2 U R2' U' R' U R2 U' R'",
  ],
  145: [
    "R' U' R U' R2' U R2' U R' U' R2' U' R2 U R U' R2' U R",
  ],
  146: [
    "R U2 R' U' R U R' U' R U R' U R U' R' U' R U' R'",
  ],
  147: [
    "R' U2' R U R' U' R U R' U' R U' R' U R U R' U R",
  ],
  148: [
    "R U2' R' U2' R' U R U' R U' R2' U R U R' U' R",
  ],
  149: [
    "R' U2 R U2 R U' R' U R' U R2 U' R' U' R U R'",
  ],
  150: [
    "R U' R' U' R U2 R' U2 R U2 R' U2 R U' R' U' R U2' R'",
  ],
  151: [
    "R' U' R U R U R2 U R' U R' U2' R' U' R' U R U R' U' R2' U R",
  ],
  152: [
    "R2' U R U R' U' R' U R U R' U' R' U2' R' U R' U R'",
  ]
};
