const timesArrayKey = "pllTimesArray";
const selectionArrayKey = "pllSelection";

var selCases = [];

var algsGroups = {
    "Group A" : [1,2,3,4],
    "Group B" : [5,6,7,8],
    "Group C" : [9,10,11,12,13,14,15,16,17,18,19,20],
    "Group D" : [21,22],
    "Group E" : [23,24,25],
    "Group F" : [26,27,28,29,30,31,32,33,34,35],
    "Group G" : [36,37,38,39],
    "Group H" : [40,41,42,43],
    "Group I" : [44,45,46,47,48,49,50,51,52,53,54,55],
    "Group J" : [56,57,58,59,60,61],
    "Group K" : [62,63,64,65],
    "Group L" : [66,67,68,69,70,71,72,73,74,75],
    "Group M" : [76],
    "Group N" : [77,78,79,80],
    "Group O" : [81],
    "Group P" : [82,83,84,85,86,87,88,89],
    "Group Q" : [90,91,92,93],
    "Group R" : [94,95,96,97,98,99,100,101],
    "Group S" : [102,103,104,105,106,107,108,109,110,111,112,113],
    "Group T" : [114,115,116,117,118,119,120],
    "Group U" : [121,122,123,124],
    "Group V" : [125,126,127,128,129,130,131,132],
    "Group W" : [133],
    "Group X" : [134,135,136,137,138,139,140,141,142,143],
    "Group Y" : [144,145,146,147,148,149],
    "Group Z" : [150,151,152],


};

var algsInfo = {
    1: {
        "name": "A1+",
        "a": "",
        "a2": "",
    },
    2: {
        "name": "A1-",
        "a": "F (R U R' U') F' f (R U R' U') f'",
        "a2": "y (r U r') U2 R U2' R' U2 (r U' r')",
    },
    3: {
        "name": "A2+",
        "a": "f (R U R' U') f' U' F (R U R' U') F'",
        "a2": "",
    },
    4: {
        "name": "A2-",
        "a": "f (R U R' U') f' U F (R U R' U') F'",
        "a2": "",
    },
    5: {
        "name": "B1+",
        "a": "(r' U2' R U R' U r)",
        "a2": "",
    },
    6: {
        "name": "B1-",
        "a": "(r U2 R' U' R U' r')",
        "a2": "",
    },
    7: {
        "name": "B2+",
        "a": "(r U R' U R U2' r')",
        "a2": "",
    },
    8: {
        "name": "B2-",
        "a": "(r' U' R U' R' U2 r)",
        "a2": "y2 l' U' L U' L' U2 l",
    },
    9: {
        "name": "C1+",
        "a": "(R U R' U') R' F (R2 U R' U') F'",
        "a2": "(R' U' R) y r U' r' U r U r'",
    },
    10: {
        "name": "C1-",
        "a": "(R U R' U) (R' F R F') (R U2' R')",
        "a2": "(R U R') y (R' F R U') (R' F' R)",
    },
    11: {
        "name": "C2+",
        "a": "r' (R2 U R' U R U2 R') U M'",
        "a2": "",
    },
    12: {
        "name": "C2-",
        "a": "M' (R' U' R U' R' U2 R) U' M",
        "a2": "y F (R U R' U') F' U F (R U R' U') F'",
    },
    13: {
        "name": "C3+",
        "a": "(r U' r') (U' r U r') y' (R' U R)",
        "a2": "F U R U' R2' F' R U (R U' R')",
    },
    14: {
        "name": "C3-",
        "a": "(R' F R) (U R' F' R) (F U' F')",
        "a2": "",
    },
    15: {
        "name": "C4+",
        "a": "(r' U' r) (R' U' R U) (r' U r)",
        "a2": "",
    },
    16: {
        "name": "C4-",
        "a": "(r U r') (R U R' U') (r U' r')",
        "a2": "",
    },
    17: {
        "name": "C5+",
        "a": "(R U R' U) (R' F R F') U2' (R' F R F')",
        "a2": "",
    },
    18: {
        "name": "C5-",
        "a": "y R U2' (R2' F R F') U2' M' (U R U' r')",
        "a2": "(r U R' U R U2 r') (r' U' R U' R' U2 r)",
    },
    19: {
        "name": "C6+",
        "a": "M U (R U R' U') M' (R' F R F')",
        "a2": "",
    },
    20: {
        "name": "C6-",
        "a": "M U (R U R' U') M2' (U R U' r')",
        "a2": "(r U R' U') M2' (U R U' R') U' M'",
    },
    21: {
        "name": "D+",
        "a": "(R U2 R') (U' R U R') (U' R U' R')",
        "a2": "y (R U R' U) (R U' R' U) (R U2' R')",
    },
    22: {
        "name": "D-",
        "a": "R U2' R2' U' R2 U' R2' U2' R",
        "a2": "",
    },
    23: {
        "name": "E1",
        "a": "R2 D (R' U2 R) D' (R' U2 R')",
        "a2": "y2 R2' D' (R U2 R') D (R U2 R)",
    },
    24: {
        "name": "E2",
        "a": "(r U R' U') (r' F R F')",
        "a2": "y (R U R D) (R' U' R D') R2'",
    },
    25: {
        "name": "E3",
        "a": "y F' (r U R' U') r' F R",
        "a2": "x (R' U R) D' (R' U' R) D x'",
    },
    26: {
        "name": "F1+",
        "a": "R U2 R' U' R U' R'",
        "a2": "y' R' U' R U' R' U2 R",
    },
    27: {
        "name": "F1-",
        "a": "R U R' U R U2' R'",
        "a2": "y' R' U2' R U R' U R",
    },
    28: {
        "name": "F2+",
        "a": "(r U R' U') M (U R U' R')",
        "a2": "",
    },
    29: {
        "name": "F2-",
        "a": "y (R U R' U') (R U' R') (F' U' F) (R U R')",
        "a2": "M U (R U R' U')(R' F R F') M'",
    },
    30: {
        "name": "F3+",
        "a": "y' F U (R U2 R' U') (R U2 R' U') F'",
        "a2": "y' (F R' F) (R2 U' R' U') (R U R') F2",
    },
    31: {
        "name": "F3-",
        "a": "(R' U' F) (U R U' R') F' R",
        "a2": "",
    },
    32: {
        "name": "F4+",
        "a": "R U B' (U' R' U) (R B R')",
        "a2": "S (R U R' U') (R' F R f')",
    },
    33: {
        "name": "F4-",
        "a": "(R U R' U') (R' F R F')",
        "a2": "",
    },
    34: {
        "name": "F5+",
        "a": "(R U R2' U') (R' F R U) R U' F'",
        "a2": "",
    },
    35: {
        "name": "F5-",
        "a": "(R U2') (R2' F R F') (R U2' R')",
        "a2": "",
    },
    36: {
        "name": "G1+",
        "a": "(R' U' R U') (R' U R U) l U' R' U x",
        "a2": "y2 (R U R' F') (R U R' U') (R' F R U') (R' F R F')",
    },
    37: {
        "name": "G1-",
        "a": "F (R U' R' U') (R U R' F')",
        "a2": "",
    },
    38: {
        "name": "G2+",
        "a": "(R U R' U) (R U' R' U') (R' F R F')",
        "a2": "",
    },
    39: {
        "name": "G2-",
        "a": "(L F') (L' U' L U) F U' L'",
        "a2": "F (R U R' U') F' (R' U' R U' R' U2 R)",
    },
    40: {
        "name": "H1+",
        "a": "(R' F) (R U R' U') F' U R",
        "a2": "",
    },
    41: {
        "name": "H1-",
        "a": "(R U R' U R U2' R') F (R U R' U') F'",
        "a2": "",
    },
    42: {
        "name": "H2+",
        "a": "(R' U' R U' R' U2 R) F (R U R' U') F'",
        "a2": "y (R' F R F') (R' F R F') (R U R' U') (R U R')",
    },
    43: {
        "name": "H2-",
        "a": "y R' U' F' U F R",
        "a2": "f' (L' U' L U) f",
    },
    44: {
        "name": "I1+",
        "a": "f (R U R' U') f'",
        "a2": "y2 F (U R U' R') F'",
    },
    45: {
        "name": "I1-",
        "a": "F (R U R' U') F'",
        "a2": "",
    },
    46: {
        "name": "I2+",
        "a": "R' U' (R' F R F') U R",
        "a2": "",
    },
    47: {
        "name": "I2-",
        "a": "F' (L' U' L U) (L' U' L U) F",
        "a2": "R' U' (R' F R F') (R' F R F') U R",
    },
    48: {
        "name": "I3+",
        "a": "F (R U R' U') (R U R' U') F'",
        "a2": "",
    },
    49: {
        "name": "I3-",
        "a": "r U' r2' U r2 U r2' U' r",
        "a2": "",
    },
    50: {
        "name": "I4+",
        "a": "r' U r2 U' r2' U' r2 U r'",
        "a2": "y' (R U2 R' U' R U' R') F (R U R' U') F'",
    },
    51: {
        "name": "I4-",
        "a": "f (R U R' U') (R U R' U') f'",
        "a2": "y2 F (U R U' R') (U R U' R') F'",
    },
    52: {
        "name": "I5+",
        "a": "(R' U' R U' R' U) y' (R' U R) B",
        "a2": "(R U R' U R U') y (R U' R') F'",
    },
    53: {
        "name": "I5-",
        "a": "(r' U' R U') (R' U R U') R' U2 r",
        "a2": "y r' U2' R (U R' U' R) (U R' U r)",
    },
    54: {
        "name": "I6+",
        "a": "(r U R' U) (R U' R' U) R U2' r'",
        "a2": "y' (r U2 R' U') (R U R' U') R U' r'",
    },
    55: {
        "name": "I6-",
        "a": "y (R' F R U) (R U' R2' F') R2 U' R' (U R U R')",
        "a2": "",
    },
    56: {
        "name": "J1+",
        "a": "r' U' r (U' R' U R) (U' R' U R) r' U r",
        "a2": "",
    },
    57: {
        "name": "J1-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    58: {
        "name": "J2+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    59: {
        "name": "J2-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    60: {
        "name": "J3+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    61: {
        "name": "J3-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    62: {
        "name": "K1+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    63: {
        "name": "K1-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    64: {
        "name": "K2+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    65: {
        "name": "K2-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    66: {
        "name": "L1",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    67: {
        "name": "L2",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    68: {
        "name": "L3+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    69: {
        "name": "L3-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    70: {
        "name": "L4+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    71: {
        "name": "L4-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    72: {
        "name": "L5+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    73: {
        "name": "L5-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    74: {
        "name": "L6+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    75: {
        "name": "L6-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    76: {
        "name": "M",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    77: {
        "name": "N1+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    78: {
        "name": "N1-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    79: {
        "name": "N2+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    80: {
        "name": "N2-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    81: {
        "name": "solved",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    82: {
        "name": "P1+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    83: {
        "name": "P1-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    84: {
        "name": "P2+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    85: {
        "name": "P2-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    86: {
        "name": "P3+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    87: {
        "name": "P3-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    88: {
        "name": "P4+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    89: {
        "name": "P4-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    90: {
        "name": "Q1A",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    91: {
        "name": "Q1-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    92: {
        "name": "Q2+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    93: {
        "name": "Q2-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    94: {
        "name": "R1+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    95: {
        "name": "R1-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    96: {
        "name": "R2+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    97: {
        "name": "R2-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    98: {
        "name": "R3+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    99: {
        "name": "R3-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    100: {
        "name": "R4+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    101: {
        "name": "R4-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    102: {
        "name": "S1+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    103: {
        "name": "S1-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    104: {
        "name": "S2+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    105: {
        "name": "S2-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    106: {
        "name": "S3+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    107: {
        "name": "S3-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    108: {
        "name": "S4+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    109: {
        "name": "S4-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    110: {
        "name": "S5+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    111: {
        "name": "S5-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    112: {
        "name": "S6+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    113: {
        "name": "S6-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    114: {
        "name": "T1",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    115: {
        "name": "T2+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    116: {
        "name": "T2-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    117: {
        "name": "T3+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    118: {
        "name": "T3-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    119: {
        "name": "T4+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    120: {
        "name": "T4-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    121: {
        "name": "U1+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    122: {
        "name": "U1-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    123: {
        "name": "U2+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    124: {
        "name": "U2-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    125: {
        "name": "V1+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    126: {
        "name": "V1-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    127: {
        "name": "V2+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    128: {
        "name": "V2-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    129: {
        "name": "V3+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    130: {
        "name": "V3-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    131: {
        "name": "V4+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    132: {
        "name": "V4-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    133: {
        "name": "W",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    134: {
        "name": "X1",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    135: {
        "name": "X2",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    136: {
        "name": "X3",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    137: {
        "name": "X4",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    138: {
        "name": "X5+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    139: {
        "name": "X5-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    140: {
        "name": "X6+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    141: {
        "name": "X6-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    142: {
        "name": "X7+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    143: {
        "name": "X7-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    144: {
        "name": "Y1+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    145: {
        "name": "Y1-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    146: {
        "name": "Y2+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    147: {
        "name": "Y2-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    148: {
        "name": "Y3+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    149: {
        "name": "Y3-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    150: {
        "name": "Z1",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    151: {
        "name": "Z2",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    152: {
        "name": "Z3",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },

};
