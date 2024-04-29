// https://www.ils.uec.ac.jp/~dima/BOOK/443.pdf

vec2 catania(in vec2 z) {
  return cadd(z, csub(clog(z), c1));
}
vec2 cdatania(in vec2 z) {
  return cadd(c1, cinv(z));
}

vec2 ctaniatay(vec2 z) {
  int n;
  vec2 res = vec2(-4.7 / 147456., 0.);
  res = cmul(res, z);
  res = cadd(res, vec2(1.3 / 6144., 0.));
  res = cmul(res, z);
  res = cadd(res, vec2(-1. / 3072., 0.));
  res = cmul(res, z);
  res = cadd(res, vec2(-1. / 192., 0.));
  res = cmul(res, z);
  res = cadd(res, vec2(1. / 16., 0.));
  res = cmul(res, z);
  res = cadd(res, vec2(.5, 0.));
  res = cmul(res, z);
  res = cadd(res, c1);
  for(int i = 0; i < 4; i++) {
    res = cadd(res, cdiv(csub(z, catania(res)), cdatania(res)));
  }
  return res;
}
vec2 ctanianega(vec2 z) {
  vec2 res = cexp(cadd(csub(z, cexp(z)), c1));
  for(int i = 0; i < 5; i++) {
    res = cadd(res, cdiv(csub(z, catania(res)), cdatania(res)));
  }
  return res;
}
vec2 ctaniabig(vec2 z) {
  vec2 res = cadd(csub(z, -clog(z)), c1);
  for(int i = 0; i < 4; i++) {
    res = cadd(res, cdiv(csub(z, catania(res)), cdatania(res)));
  }
  return res;
}
vec2 ctanias(vec2 z) {
  vec2 t = z + vec2(2., -PI);
  t *= 2. / 9.;
  t = cmul(vec2(0., 1.), csqrt(t));
  vec2 res = vec2(-12.51 / 224., 0.);
  res = cmul(res, t);
  res = cadd(res, vec2(-.3 / 7., 0.));
  res = cmul(res, t);
  res = cadd(res, vec2(.9 / 16., 0.));
  res = cmul(res, t);
  res = cadd(res, vec2(.3, 0.));
  res = cmul(res, t);
  res = cadd(res, vec2(.75, 0.));
  res = cmul(res, t);
  res = cadd(res, vec2(-3., 0.));
  res = cmul(res, t);
  res = cadd(res, vec2(3., 0.));
  res = cmul(res, t);
  res = cadd(res, vec2(-1., 0.));

  for(int i = 0; i < 4; i++) {
    res = cadd(res, cdiv(csub(z, catania(res)), cdatania(res)));
  }
  return res;
}
vec2 ctania(in vec2 z) {
  if(abs(z.y) < PI && z.x < -2.51) {
    return ctanianega(z);
  }
  if(cnorm(z) > 7. || z.x > 3.8) {
    return ctaniabig(z);
  }
  if(z.y > .7) {
    return ctanias(z);
  }
  if(z.y < -.7) {
    return conj(ctanias(conj(z)));
  }
  return ctaniatay(z);
}

vec2 cdtania(in vec2 z) {
  vec2 t = ctania(z);
  return cdiv(t, cadd(c1, t));
}

vec2 cdoya(in vec2 z, in float n) {
  return ctania(cadd(vec2(int(n), 0.), catania(z)));
}
vec2 cdoya(in vec2 z) {
  return cdoya(z, 1.);
}

vec2 cfilog(in vec2 z) {
  return cdiv(ctania(csub(clog(z), c1 + I(PI))), -z);
}
// https://www.ams.org/journals/mcom/2009-78-267/S0025-5718-09-02188-7/S0025-5718-09-02188-7.pdf
vec2 cfima(in vec2 z) {
  // if(z.y <= 4. + .2379 * z.x) {
  //   return cexp(cfima(csub(z, c1)));
  // }
  int shift = 0;
  for(; shift < 250; shift++) {
    if(z.y > 4. + .2379 * z.x) {
      break;
    }
    z.x -= 1.;
  }
  vec2 a0 = vec2(0.31813150520476413531, 1.33723570143068940890);
  vec2 a1 = c1;
  vec2 a2 = .5 * cinv(csub(a0, a1));
  vec2 a3 = cdiv(cadd(a2, vec2(1. / 6., 0.)), csub(cmul(a0, a0), c1));
  vec2 a4 = cdiv(cadd(a2 * .5, cadd(cmul(a2, a2) * .5, cadd(a3, 1. / 24.))), csub(cmul(a0, cmul(a0, a0)), c1));
  vec2 a5 = cdiv(cadd(cmul(a2, a2) * .5, cadd(a2 / 6., cadd(cmul(a2, a3), cadd(a3 * .5, cadd(a4, 1. / 120.))))), csub(cmul(a0, cmul(a0, cmul(a0, a0))), c1));
  vec2 R = vec2(1.0779614375278, -.9465409639479);
  vec2 b = vec2(0.12233176, 0.02366108);
  vec2 e = cexp(cadd(cmul(a0, z), R));
  vec2 Li = vec2(0., TAU);

  vec2 res = cadd(a0, cmul(e, cadd(a1, cmul(e, cadd(a2, cmul(e, cadd(a3, cmul(e, cadd(a4, cmul(e, a5))))))))));
  res = cadd(res, cmul(b, cexp(cmul(Li, z))));

  for(int i = 0; i < shift; i++) {
    res = cexp(res);
  }
  return res;
}

vec2 ctai(in vec2 z) {
  // if(cnorm(z) > .5) {
  //   return vec2(1.);
  // }
  int flog = 0;
  int fexp = 0;
  for(int shift = 0; shift < 25; shift++) {
    if(z.x > .5) {
      z.x -= 1.;
      fexp++;
    } else if(z.x < -.5) {
      z.x += 1.;
      flog++;
    } else {
      break;
    }
  }
  if(z.x < -.5) {
    z.x = -.5;
  }

  vec2[] t = vec2[](vec2(0.37090658903228507226, 1.33682167078891400713), vec2(0.03660096537598455518, 0.13922215389950498565), vec2(-0.16888431840641535131, 0.09718533619629270148), vec2(-0.12681315048680869007, -0.11831628767028627702), vec2(0.04235809310323926380, -0.10520930088320722129), vec2(0.05848306393563178218, -0.00810224524496080435), vec2(0.02340031665294847393, 0.01807777011820375229), vec2(0.00344260984701375092, 0.01815103755635914459), vec2(-0.00803695814441672193, 0.00917428467034995393), vec2(-0.00704695528168774229, -0.00093958506727472686), vec2(-0.00184617963095305509, -0.00322342583181676459), vec2(0.00054064885443097391, -0.00189672061015605498), vec2(0.00102243648088806748, -0.00055968657179243165), vec2(0.00064714396398048754, 0.00025980661935827123), vec2(0.00010444455593372213, 0.00037199472598828116), vec2(-0.00011178535404343476, 0.00016786687552190863), vec2(-0.00010630158710808594, 0.00002072200033125881), vec2(-0.00005078098819110608, -0.00003575913005741248), vec2(-0.00000314742998690270, -0.00003523185937587781), vec2(0.00001347661344130504, -0.00001333034137448205), vec2(0.00000980239082395275, 0.00000047607184151673), vec2(0.00000355493475454698, 0.00000389816212201278), vec2(-0.00000021552652645735, 0.00000296273413237997), vec2(-0.00000131673903627820, 0.00000097381354534333), vec2(-0.00000083401960806066, -0.00000018663858711081), vec2(-0.00000022869610981361, -0.00000037497716770031), vec2(0.00000005372584613379, -0.00000023060136585176), vec2(0.00000011406656653786, -0.00000006569510293486), vec2(0.00000006663595460757, 0.00000002326630571343), vec2(0.00000001396786846375, 0.00000003315118300198), vec2(-0.00000000684890556421, 0.00000001713041981611), vec2(-0.00000000916619598268, 0.00000000403886083652), vec2(-0.00000000502933384276, -0.00000000222121299478), vec2(-0.00000000084484352792, -0.00000000273668661113), vec2(0.00000000070086729861, -0.00000000124687683156), vec2(0.00000000070558101710, -0.00000000021962577544), vec2(0.00000000035900951951, 0.00000000018774741308), vec2(0.00000000005248658571, 0.00000000021201177126), vec2(-0.00000000006264758835, 0.00000000009059171879), vec2(-0.00000000005333473585, 0.00000000001006078866), vec2(-0.00000000002432138144, -0.00000000001506937008), vec2(-0.00000000000331880379, -0.00000000001544700067), vec2(0.00000000000501652570, -0.00000000000658967459), vec2(0.00000000000401214135, -0.00000000000036708383), vec2(0.00000000000158629111, 0.00000000000119885992), vec2(0.00000000000019668766, 0.00000000000106532662), vec2(-0.00000000000036355730, 0.00000000000047229527), vec2(-0.00000000000029920206, 0.00000000000001251827), vec2(-0.00000000000010305550, -0.00000000000009571381), vec2(-0.00000000000000910369, -0.00000000000007087680), vec2(0.00000000000002418310, -0.00000000000003240337));

  vec2 res = t[0];
  vec2 zn_3i = c1;
  vec2 z_3i = csub(z, vec2(0., 3.)) * .5;

  for(int i = 1; i < 51; i++) {
    zn_3i = cmul(zn_3i, z_3i);
    res = cadd(res, cmul(t[i], zn_3i));
  }

  for(int i = 0; i < flog; i++) {
    res = clog(res);
  }
  for(int i = 0; i < fexp; i++) {
    res = cexp(res);
  }

  return res;
}
vec2 cmaclo(in vec2 z) {
  // if(cnorm(z) > .5) {
  //   return vec2(0.5);
  // }

  int flog = 0;
  int fexp = 0;
  for(int shift = 0; shift < 25; shift++) {
    if(z.x > .5) {
      z.x -= 1.;
      fexp++;
    } else if(z.x < -.5) {
      z.x += 1.;
      flog++;
    } else {
      break;
    }
  }
  if(z.x < -.5) {
    z.x = -.5;
  }

  float[] s = float[](0.30685281944005469058, 1.18353470251664338875, 1.58593285160678321155, 1.36629265207672068172, 1.36264601823980036066, 1.21734246689515424045, 1.10981816083559525765, 0.96674692974769849130, 0.84089872598668435888, 0.71353210966804747617, 0.60168548504001373445, 0.49928574281440518678, 0.41140086629121763728, 0.33506195665178500898, 0.27104779243942234146, 0.21728554054610033086, 0.17311050207880035456, 0.13690016038526570119, 0.10765949732729711286, 0.08413804539743192923, 0.06542450487497340761, 0.05060001212013485322, 0.03895655493977817629, 0.02985084640296329153, 0.02277908979501017117, 0.01730960309240666892, 0.01310389615589767874, 0.00988251130733762764, 0.00742735935367278347, 0.00556296426263720549, 0.00415334478103463346, 0.00309116153137843543, 0.00229387529664008653, 0.00169729976398295653, 0.00125245885041635465, 0.00092172809095368547, 0.00067661152429638357, 0.00049544127485341987, 0.00036192128589181518, 0.00026376927786672476, 0.00019180840045267570, 0.00013917553105723647, 0.00010077412023867018, 0.00007281884753121133, 0.00005251474516228446, 0.00003779882770351268, 0.00002715594536867241, 0.00001947408515177282, 0.00001394059355016322, 0.00000996213949015693, 0.00000710713872292710, 0.00000506199803708578, 0.00000359960968975399, 0.00000255569149787694, 0.00000181175810338313, 0.00000128245831538430, 0.00000090647322737496, 0.00000063980422418981, 0.00000045095738191441, 0.00000031741772125007, 0.00000022312521183625, 0.00000015663840476155, 0.00000010982301013230, 0.00000007690305934973, 0.00000005378502675604, 0.00000003757126131521, 0.00000002621429405247, 0.00000001826909956818, 0.00000001271754463425, 0.00000000884310192977, 0.00000000614230041407, 0.00000000426177146865, 0.00000000295386817285, 0.00000000204522503591, 0.00000000141464900426, 0.00000000097750884878, 0.00000000067478454029, 0.00000000046535930671, 0.00000000032062550784, 0.00000000022069891976, 0.00000000015177557961, 0.00000000010428189463, 0.00000000007158597119, 0.00000000004909806710, 0.00000000003364531769, 0.00000000002303635851, 0.00000000001575933679, 0.00000000001077213757, 0.00000000000735717912, 0.00000000000502077719, 0.00000000000342362421, 0.00000000000233271256, 0.00000000000158818623, 0.00000000000108046566, 0.00000000000073450488, 0.00000000000049894945, 0.00000000000033868911, 0.00000000000022973789, 0.00000000000015572383, 0.00000000000010548054, 0.00000000000007139840, 0.00000000000004829557, 0.00000000000003264619, 0.00000000000002205299, 0.00000000000001488731, 0.00000000000001004347, 0.00000000000000677124, 0.00000000000000456225, 0.00000000000000307196, 0.00000000000000206720, 0.00000000000000139022, 0.00000000000000093437, 0.00000000000000062762, 0.00000000000000042133, 0.00000000000000028267, 0.00000000000000018954, 0.00000000000000012701, 0.00000000000000008507, 0.00000000000000005694, 0.00000000000000003809);
  vec2 res = cadd(clog(cadd(z, vec2(2., 0.))), vec2(s[0], 0.));
  vec2 zn = c1;

  for(int i = 1; i < 120; i++) {
    zn = cmul(zn, .5 * z);
    res = cadd(res, cmul(vec2(s[i], 0.), zn));
  }

  for(int i = 0; i < flog; i++) {
    res = clog(res);
  }
  for(int i = 0; i < fexp; i++) {
    res = cexp(res);
  }
  return res;
}

vec2 ctet(in vec2 z) {
  // e^^z
  if(z.y > 4.5) {
    return cfima(z);
  } else if(z.y > 1.5) {
    return ctai(z);
  } else if(z.y > -1.5) {
    return cmaclo(z);
  } else if(z.y > -4.5) {
    return conj(ctai(conj(z)));
  }
  return conj(cfima(conj(z)));
}

vec2 cate(in vec2 z) {
  vec2 shift = c0;

  for(int i = 0; i < 25; i++) {
    if(abs(z.y) > 1.3372357014306895) {
      z = clog(z);
      shift.x++;
    } else if(z.x > 2.) {
      shift.x++;
      z = clog(z);
    } else if(z.x < 0.31813150520476413) {
      shift.x--;
      z = cexp(z);
    } else if(cnorm(csub(clog(z), c1)) < cnorm(csub(z, c1))) {
      z = clog(z);
      shift.x++;
    } else {
      break;
    }
  }

  float[] u = float[](1.4192252155045112363, -0.05213258059503801667, 0.00693219127232187586, -0.00015617045803377859, -0.00100912103192385785, 0.00082172671942507903, -0.00035776641706493177, -0.00000931803078422933, 0.00016678111348857047, -0.00014181446429806932, 0.00003186488716454018, 0.00006022937595596333, -0.00007769822429012910, 0.00002881816919640196, 0.00003346765914794806, -0.00005635940084759932, 0.00002613708927959275, 0.00002533341053138444, -0.00005010441151688034, 0.00002593810263640952, 0.00002404611936084357, -0.00005163238246428602, 0.00002794638872473000, 0.00002700739592764804, -0.00005939035114511979, 0.00003210955504312860, 0.00003438232223525011, -0.00007428278434380886, 0.00003866302665809861, 0.00004803799918127077, -0.00009914141292927652, 0.00004800025436154043, 0.00007191960183392704, -0.00013922522917537457, 0.00006043126908005670, 0.00011338211995240744, -0.00020351111316586852, 0.00007562971718596908, 0.00018585637209671475, -0.00030700846364341576, 0.00009132512919756623, 0.00031386108850653502, -0.00047464470561729965, 0.00010030770871287629, 0.00054232170050706079, -0.00074759603610534669, 0.00008375204845585605, 0.00095389423083896800, -0.00119336225449479362, -0.00000327383738614825, 0.00170107934819055851, -0.00192109516273315209, -0.00026290310001950487, 0.00306590657916818192, -0.00310372506294090238, -0.00091982425407694250, 0.00556979490215834833, -0.00500546835451257978, -0.00245869651201214212, 0.01017705593773498771, -0.00800820238034244403, -0.00590649361431362999, 0.01866321477729812259, -0.01260156096677063874, -0.01341963601206602220, 0.03429254345271898208, -0.01926894593144593687, -0.02946277663641767158, 0.06300065960337521143, -0.02800532706641396460, -0.06325609033757989552, 0.11556117355587923468, -0.03708367328869965895, -0.13352664223772733876, 0.21104853030721187901, -0.03941069742436464907, -0.27853504829255953945, 0.38331715278474703945, -0.01491397058539710788, -0.57446133459038406510, 0.68905734940479856920, 0.09065013779953061401, -1.17542205931169707611, 1.22536662105515059551, 0.40500835675024698945, -2.37977019901803332758, 2.13411821810153146117, 1.24184396615612624437, -4.78947531960227212977, 3.64093109251482172084, 3.27095016057312193425, -9.53051815711462246838, 5.92750355113636295812, 8.12068845726284394004, -18.89123486907114468636, 9.07245090167984002960, 18.99435214920948311601, -36.62201395750987842348, 12.69160696640316032813, 43.73569046442687380249, -71.43155879446639744401, 14.83661067193675719977, 95.94011857707508283966, -135.28537549407113260713, 4.55415019762845751927, 212.46383399209483400227, -258.45286561264816782568, -34.35533596837944259050, 440.37608695652170354151, -466.49328063241102881875, -184.78893280632408391284, 969.10988142292478642048, -888.80079051383393107244, -485.21897233201576682404, 1912.15652173913008482486, -1381.80553359683767666866, -1490.15335968379417863616, 4216.82213438735107047250, -2565.99525691699591334327, -3155.47826086956501967506, 7689.57470355731129529886, -3206.47588932806274897303, -8547.41501976284416741692, 17971.70592885375299374573, -7203.41501976284507691162, -16388.65454545454485923983, 28589.12885375493715400808, -2355.80711462450562976301);

  vec2 a0 = vec2(0.31813150520476413531, 1.33723570143068940890);
  vec2 ac = conj(a0);

  vec2 res = c0;
  vec2 z_1 = csub(z, c1) * .5;

  for(int i = 127; i > 0; i--) {
    res = cadd(res, vec2(u[i], 0.));
    res = cmul(res, z_1);
  }

  res = cadd(res, vec2(u[0], 0.));
  res = cadd(res, cdiv(clog(csub(z, a0)), a0));
  res = cadd(res, cdiv(clog(csub(z, ac)), ac));
  res = cadd(res, shift);
  return res;
}

vec2 cate(in float k) {
  return cate(vec2(k, 0.));
}

vec2 ctetranat(in vec2 z, in vec2 w) {
  return ctet(w + cate(z));
}
vec2 ctetranat(in float k, in vec2 w) {
  return ctetranat(vec2(k, 0.), w);
}
vec2 ctetranat(in vec2 z, in float w) {
  return ctetranat(z, vec2(w, 0.));
}
vec2 ctetranat(in float k, in float w) {
  return ctetranat(vec2(k, 0.), vec2(w, 0.));
}

vec2 ctetranat(in vec2 z) {
  return ctetranat(z, 1.);
}
vec2 ctetra(in vec2 z, in int n) {
  vec2 w = c1;
  for(int i = 0; i < n; i++) {
    w = cpow(z, w);
  }
  return w;
}

float ctetra(in float z, in int n) {
  float k = 1.;
  for(int i = 0; i < n; i++) {
    k = pow(z, k);
  }
  return k;
}

vec2 ctetra(in vec2 z, in float n) {
  return ctetra(z, int(n));
}

// https://www.shadertoy.com/view/Mlsfzs
void sncndn(float u, float k2, out float sn, out float cn, out float dn) {
  float emc = 1.0 - k2;
  float a, b, c;
  const int N = 4;
  float em[N], en[N];
  a = 1.0;
  dn = 1.0;
  for(int i = 0; i < N; i++) {
    em[i] = a;
    emc = sqrt(emc);
    en[i] = emc;
    c = 0.5 * (a + emc);
    emc = a * emc;
    a = c;
  }
  // Nothing up to here depends on u, so
  // could be precalculated.
  u = c * u;
  sn = sin(u);
  cn = cos(u);
  if(sn != 0.0) {
    a = cn / sn;
    c = a * c;
    for(int i = N - 1; i >= 0; i--) {
      b = em[i];
      a = c * a;
      c = dn * c;
      dn = (en[i] + a) / (b + a);
      a = c / b;
    }
    a = 1.0 / sqrt(c * c + 1.0);
    if(sn < 0.0)
      sn = -a;
    else
      sn = a;
    cn = c * sn;
  }
}

vec2 csn(vec2 z, float k2) {
  float snu, cnu, dnu, snv, cnv, dnv;
  sncndn(z.x, k2, snu, cnu, dnu);
  sncndn(z.y, 1.0 - k2, snv, cnv, dnv);
  float a = 1.0 / (1.0 - dnu * dnu * snv * snv);
  return a * vec2(snu * dnv, cnu * dnu * snv * cnv);
}

vec2 ccn(vec2 z, float k2) {
  float snu, cnu, dnu, snv, cnv, dnv;
  sncndn(z.x, k2, snu, cnu, dnu);
  sncndn(z.y, 1.0 - k2, snv, cnv, dnv);
  float a = 1.0 / (1.0 - dnu * dnu * snv * snv);
  return a * vec2(cnu * cnv, -snu * dnu * snv * dnv);
}

vec2 cdn(vec2 z, float k2) {
  float snu, cnu, dnu, snv, cnv, dnv;
  sncndn(z.x, k2, snu, cnu, dnu);
  sncndn(z.y, 1.0 - k2, snv, cnv, dnv);
  float a = 1.0 / (1.0 - dnu * dnu * snv * snv);
  return a * vec2(dnu * cnv * dnv, -k2 * snu * cnu * snv);
}

vec2 csn(vec2 z) {
  return csn(z, .5);
}
vec2 ccn(vec2 z) {
  return ccn(z, .5);
}
vec2 cdn(vec2 z) {
  return cdn(z, .5);
}

vec2 cgammaL(in vec2 z) {
  // Lanczos
  float LG = 5.65;
  float[] P = float[](2.506628275635, 225.525584619175, -268.295973841305, 80.9030806934622, -5.007578639705, 0.0114684895435);

  vec2 zz = (z.x > 1.0) ? (z) : (c1 - z);
  vec2 sum = vec2(P[0], 0.0) + P[1] * cinv(zz + c1) + P[2] * cinv(zz + vec2(2.0, 0.0)) + P[3] * cinv(zz + vec2(3.0, 0.0)) + P[4] * cinv(zz + vec2(4.0, 0.0)) + P[5] * cinv(zz + vec2(5.0, 0.0));
  vec2 zh = zz + vec2(LG, 0.0);
  vec2 w = cexp(clog(sum) + cmul(zz + vec2(0.5, 0.0), clog(zh)) - clog(zz) - zh);

  return ((z.x > 1.0) ? (w) : (PI * cinv(cmul(w, csin(PI * z)))));
}

vec2 cgamma(vec2 z) {
  // Spouge
  const int N = 16;
  float c = sqrt(TAU);
  vec2 s = vec2(c, 0.);
  float f = 1.;
  for(int k = 1; k < N; k++) {
    c = exp(float(N - k)) * pow(float(N - k), float(k) - .5) / f;
    f *= -float(k);
    s += c * cinv(z + vec2(float(k), 0.));
  }
  s = cmul(s, cmul(cexp(-z - vec2(float(N), 0.)), cpow(z + vec2(float(N), 0.), z + vec2(.5, 0.))));
  return cdiv(s, z);
}

vec2 cfactorial(in vec2 z) {
  return cgamma(cadd(z, c1));

}

vec2 czeta(in vec2 z, in vec2 a) {
  // Hurwitz Zeta function
  vec2 suffix = c0;

  // Naive SUM:
  // for(int n = 0; n < 100; n++) {
  //   suffix += cpow(cadd(a, R(float(n))), -z);
  // }
  // return suffix;

  if(a.x > 1. && z.x < 0.) {
    // zeta(s, a) = zeta(s, a + m) + sum(0 -> m - 1, (n + a)^-s)
    // zeta(s, a + m) = zeta(s, a) - sum(0 -> m - 1, (n + a)^-s)

    float k = fract(a.x);
    float m = a.x - k;
    a.x = k;
    for(int i = 0; i < int(m); i++) {
      suffix = cadd(suffix, cpow(cadd(R(float(i)), a), -z));
    }
    suffix = -suffix;
  } else if(a.x < 0. && z.x < 0.) {
    // zeta(s, a) = zeta(s, a + m) + sum(0 -> m - 1, (n + a)^-s)
    // zeta(s, a + m) = zeta(s, a) - sum(0 -> m - 1, (n + a)^-s)

    float m = -floor(a.x);
    float k = a.x + m;

    for(int i = 0; i < int(m); i++) {
      suffix = cadd(suffix, cpow(cadd(R(float(i)), a), -z));
    }
    a.x = k;
  }

  if(z.x < -1. && (abs(a.y) < 1e-9 && a.x > 0. && a.x <= 1.)) {
    // Fast convergence on negative real part
    // zeta(s, a) = 2*gamma(1-s) / (TAU)^(1-s) (
    //    sin(ETA*s) * sum(1 -> inf, cos(TAU*n*a) * n^(1-s)) +
    //    cos(ETA*s) * sum(1 -> inf, sin(TAU*n*a) * n^(1-s)))
    const float N = 20.;
    vec2 sum1 = c0;
    vec2 z_1 = csub(z, c1);
    for(float i = 1.; i < N; i++) {
      sum1 += cos(TAU * i * a.x) * cpow(i, z_1);
    }
    vec2 sum2 = c0;
    for(float i = 1.; i < N; i++) {
      sum2 += sin(TAU * i * a.x) * cpow(i, z_1);
    }
    vec2 f = cmul(csin(ETA * z), sum1) + cmul(ccos(ETA * z), sum2);
    return cadd(2. * cmul(cpow(TAU, z_1), cmul(cgamma(-z_1), f)), suffix);
  }

  vec2 zeta = c0;
  int n = 30;
  vec2 N = R(float(n));
  vec2 aN = cadd(a, N);
  vec2 s = -z;
  for(int i = 0; i < n; i++) {
    zeta = cadd(zeta, cpow(cadd(a, R(float(i))), s));
  }
  vec2 deriv = cpow(aN, s);
  vec2 term = .5 * deriv;
  zeta = cadd(zeta, term);

  vec2 emq = aN;
  term = cmul(deriv, emq);
  s = cadd(s, c1);
  term = cdiv(term, s);
  zeta = csub(zeta, term);

  emq = cinv(emq);
  deriv = cmul(deriv, emq);

  emq = cmul(emq, emq);

  float fact = .5;

  s = csub(s, c1);
  s = -s;
  vec2 spoch = s;
  int k = 1;
  while(k < 20) {
    float bern = B2nN[k] / B2nD[k];
    float ft = bern;
    ft *= fact;

    term = cmul(deriv, ft);
    term = cmul(term, spoch);
    zeta = cadd(zeta, term);

    ft = dot2(term);
    if(ft < 1e-9) {
      break;
    }
    k++;
    fact /= (2. * float(k) - 1.) * (2. * float(k));
    deriv = cmul(deriv, emq);
    s = cadd(s, c1);
    spoch = cmul(spoch, s);
    s = cadd(s, c1);
    spoch = cmul(spoch, s);
  }

  zeta = cadd(zeta, suffix);

  return zeta;
}

// vec2 reflection(vec2 z, vec2 a) {
//   const float N = 20.;
//   vec2 sum1 = vec2(0);
//   for(float i = 1.; i < N; i++) sum1 += cos(TAU * i * a) * cpow(i, z - c1);
//   vec2 sum2 = vec2(0);
//   for(float i = 1.; i < N; i++) sum2 += sin(TAU * i * a) * cpow(i, z - c1);
//   vec2 f = cmul(csin(pi * z / 2.), sum1) + cmul(ccos(pi * z / 2.), sum2);
//   return 2. * cmul(cpow(TAU, z - c1), cmul(cgamma(c1 - z), f));
// }

// vec2 czeta(vec2 z, vec2 a) {
//   if(z.x < -1.)
//     return reflection(z, a);
//   return czeta3(z, a);
// }

vec2 czeta(in vec2 z, in float a) {
  return czeta(z, R(a));
}
vec2 czeta(in float k, in vec2 a) {
  return czeta(R(k), a);
}
vec2 czeta(in vec2 z) {
  return czeta(z, c1);
}

vec2 cdzeta(in vec2 z) {
  vec2 sum = vec2(0);
  for(float i = 1.; i < 30.; ++i) {
    sum += -log(i) * cos(-z.y * log(i) - vec2(ETA, 0.)) / pow(i, z.x);
  }
  return sum;
}

vec2 _cpsi_asymptotic(in vec2 z) {
  // Digamma function
  float[] B = float[](0.166666666666666667, -0.0333333333333333333, 0.0238095238095238095, -0.0333333333333333333, 0.0757575757575757576, -0.253113553113553114, 1.16666666666666667, -7.09215686274509804, 54.9711779448621554, -529.124242424242424, 6192.12318840579710, -86580.2531135531136, 1425517.16666666667, -27298231.0678160920, 601580873.900642368, -15116315767.0921569);
  vec2 rzz = cdiv(cinv(z), z);
  vec2 zfac = c1;
  vec2 term = c0;
  vec2 res = csub(clog(z), .5 * cinv(z));

  for(int i = 1; i < 17; i++) {
    zfac = cmul(zfac, rzz);
    term = -cmul(B[i - 1], zfac / (2. * float(i)));
    res = cadd(res, term);
    if(cnorm(term) < 2.220446092504131e-16 * cnorm(res)) {
      break;
    }
  }
  return res;
}
vec2 _forward_rec(in vec2 z, in vec2 s, in int n) {
  vec2 res = s;
  for(int i = 0; i < n; i++) {
    res = cadd(res, cinv(cadd(z, vec2(float(i), 0.))));
  }
  return res;
}
vec2 _backward_rec(in vec2 z, in vec2 s, in int n) {
  vec2 res = s;
  for(int i = 1; i < n + 1; i++) {
    res = csub(res, cinv(csub(z, vec2(float(i), 0.))));
  }
  return res;
}

vec2 cpsi(in vec2 z) {
  float absz = cnorm(z);
  vec2 res = c0;
  float smallabsz = 14.;

  if(z.x < 0. && abs(z.y) < smallabsz) {
    res = csub(res, PI * cdiv(ccos(PI * z), csin(PI * z)));
    z = csub(c1, z);
    absz = cnorm(z);
  }

  if(absz < 0.5) {
    res = csub(res, cinv(z));
    z = cadd(c1, z);
    absz = cnorm(z);
  }

  if(absz > smallabsz) {
    res = cadd(res, _cpsi_asymptotic(z));
  } else if(z.x >= 0.) {
    int n = int(smallabsz - absz) + 1;
    res = cadd(res, _backward_rec(cadd(z, vec2(float(n), 0.)), _cpsi_asymptotic(cadd(z, vec2(float(n), 0.))), n));
  } else {
    int n = int(smallabsz - absz) - 1;
    res = cadd(res, _forward_rec(csub(z, vec2(float(n), 0.)), _cpsi_asymptotic(csub(z, vec2(float(n), 0.))), n));
  }
  return res;
}
vec2 cpolygamma(in vec2 z, in vec2 w) {
  if(length(w) < 1e-6) {
    return cpsi(z);
  }
  return cmul(cmul(cpow(-c1, cadd(w, c1)), cfactorial(w)), czeta(cadd(w, c1), z));
}

vec2 cpolygamma(in vec2 z, in float k) {
  if(abs(k) < 1e-6) {
    return cpsi(z);
  }

  if(fract(k) > 1e-6) {
    return cpolygamma(z, R(k));
  }
  int n = int(k);
  // Compute !n:
  int fact = 1;
  for(int i = 1; i < n; i++) {
    fact *= i;
  }
  float sign = 1.;
  if(n % 2 == 0) {
    sign *= -1.;
  }
  return sign * float(fact) * czeta(float(fact + 1), z);
}

vec2 ceta(in vec2 z) {
  return cmul(czeta(z), csub(c1, cpow(2., csub(c1, z))));
}
vec2 cdgamma(in vec2 z) {
  return cmul(cgamma(z), cpsi(z));
}

vec2 cbeta(in vec2 z, in vec2 w) {
  return cdiv(cgamma(z) * cgamma(w), cgamma(cadd(z, w)));
}

vec2 cdbeta(in vec2 z, in vec2 w) {
  return cmul(cbeta(z, w), csub(cpsi(z), cpsi(cadd(z, w))));
}

vec2 cphi(in vec2 z, in vec2 s, in vec2 a) {
  // Lerch Phi function
  vec2 sum = vec2(0);
  vec2 term = vec2(0);
  vec2 zk = c1;

  for(float i = 0.; i < 50.; ++i) {
    term = cdiv(zk, cpow(cadd(a, vec2(float(i), 0.)), s));
    sum += term;
    if(cnorm(term) <= 1e-9 * (1. + cnorm(sum))) {
      break;
    }
    zk = cmul(zk, z);
  }
  return sum;
}

vec2 cphi(in float k, in vec2 s, in vec2 a) {
  return cphi(vec2(k, 0.), s, a);
}
vec2 cphi(in vec2 z, in float s, in vec2 a) {
  return cphi(z, vec2(s, 0.), a);
}
vec2 cphi(in vec2 z, in vec2 s, in float a) {
  return cphi(z, s, vec2(a, 0.));
}
vec2 cphi(in float k, in float s, in vec2 a) {
  return cphi(vec2(k, 0.), vec2(s, 0.), a);
}
vec2 cphi(in float k, in vec2 s, in float a) {
  return cphi(vec2(k, 0.), s, vec2(a, 0.));
}
vec2 cphi(in vec2 z, in float s, in float a) {
  return cphi(z, vec2(s, 0.), vec2(a, 0.));
}
vec2 cphi(in float k, in float s, in float a) {
  return cphi(vec2(k, 0.), vec2(s, 0.), vec2(a, 0.));
}

vec2 cfibonacci(in vec2 z) {
  // Using generalized Binet formula
  return cdiv(csub(cpow(PHI, z), cpow(-PHI, -z)), 2. * PHI - 1.);
}

vec2 cweierstrass(in vec2 z) {
  // Weierstrass elliptic function
  const float om = 1.529954037057; // real semiperiod
  const float o3 = 0.57735026919; // 1/sqrt(3)
  const vec2 ep = vec2(0.5, 0.866025403784); // exp(i * pi/3)

  vec2 zt = z - 2.0 * om * (vec2(floor(0.5 - o3 * dot(vec2(ep.x, -ep.y), z) / om), 0.) + floor(o3 * z.y / om + 0.5) * ep);
  bool zq = (dot(zt, zt) > 0.25);
  vec2 zz = zq ? 0.0625 * zt : zt;

  vec2 z2 = cmul(zz, zz), z4 = cmul(z2, z2), z3 = cmul(zz, z2), z6 = cmul(z4, z2);
  vec2 wp = cinv(z2) + cdiv(cmul(z4 / 28.0, c1 + z6 / 2730.0), c1 + cmul(z6 / 420.0, z6 / 1729.0 - c1));

  if(zq) {
    for(int k = 0; k < 4; k++) {
      vec2 tmp1 = cmul(wp, cmul(wp, wp));
      wp = cdiv(cmul(tmp1 + vec2(2.0, 0.), wp), 4.0 * tmp1 - c1);
    }
  }

  return wp;
}
vec2 cdweierstrass(in vec2 z) {
  // Weierstrass elliptic function
  const float om = 1.529954037057; // real semiperiod
  const float o3 = 0.57735026919; // 1/sqrt(3)
  const vec2 ep = vec2(0.5, 0.866025403784); // exp(i * pi/3)
     // constants for Padé approximation
  const float P0 = 0.00328332715973; // 3191/971880
  const float P1 = 0.0148207056102; // 205/13832

    // period reduction and rescaling
  vec2 zt = z - 2.0 * om * (vec2(floor(0.5 - o3 * dot(vec2(ep.x, -ep.y), z) / om), 0.) + floor(o3 * z.y / om + 0.5) * ep);
  bool zq = (dot(zt, zt) > 0.25);
  vec2 zz = zq ? 0.0625 * zt : zt;

    // evaluate the Padé approximants
  vec2 z2 = cmul(zz, zz), z4 = cmul(z2, z2), z3 = cmul(zz, z2), z6 = cmul(z4, z2);
  vec2 pd = cdiv(cmul(z3 / 7.0, c1 + P0 * z6), c1 + cmul(z6 / 3738.0, P1 * z6 - vec2(13.4, 0.))) - 2.0 * cinv(z3);

  if(zq) {
    for(int k = 0; k < 4; k++) {
      vec2 tmp2 = cmul(pd, pd);
      pd = cdiv(cmul(tmp2 - vec2(18.0, 0.), tmp2) - vec2(27.0, 0.), 8.0 * cmul(pd, tmp2));
    }
  }

  return pd;
}
vec2 cellk(in vec2 z) {
  vec2 agA = c1, agB = csqrt(agA - z);
  vec2 tmp = vec2(0.0), h = tmp;

  for(int i = 0; i <= 9; i++) {
    tmp = csqrt(cmul(agA, agB));
    h = 0.5 * (agB - agA);
    agA += h;
    agB = tmp;
    if(length(h) < 1.0e-6)
      break;
  }

  return (PI * cinv(agA + agB));
}

float polevl(float x, float[11] coef) {
  float ans = coef[0];

  for(int i = 0; i < 11; i++) {
    ans = ans * x + coef[i];
  }
  return ans;
}

float cellpk(in float x) {
  const float P[11] = float[](1.37982864606273237150E-4, 2.28025724005875567385E-3, 7.97404013220415179367E-3, 9.85821379021226008714E-3, 6.87489687449949877925E-3, 6.18901033637687613229E-3, 8.79078273952743772254E-3, 1.49380448916805252718E-2, 3.08851465246711995998E-2, 9.65735902811690126535E-2, 1.38629436111989062502E0);
  const float Q[11] = float[](2.94078955048598507511E-5, 9.14184723865917226571E-4, 5.94058303753167793257E-3, 1.54850516649762399335E-2, 2.39089602715924892727E-2, 3.01204715227604046988E-2, 3.73774314173823228969E-2, 4.88280347570998239232E-2, 7.03124996963957469739E-2, 1.24999999999870820058E-1, 4.99999999999999999821E-1);
  if(x > 0.) {
    return (polevl(x, P) - log(x) * polevl(x, Q));
  } else {
    return (1.3862943611198906188E0 - 0.5 * log(x));
  }
}

float cellik(in float phi, in float m) {
  float a = 1.;
  float b = sqrt(1. - m);
  float c = sqrt(m);
  float d = 1.;
  for(int i = 0; abs(c) > 1e-6; i++) {
    if(mod(phi, PI) != 0.) {
      float dPhi = atan((b * tan(phi)), a);
      if(dPhi < 0.) {
        dPhi += PI;
      }
      phi += dPhi + floor(phi / PI) * PI;
    } else {
      phi += phi;
    }
    c = (a + b) / 2.;
    b = sqrt(a * b);
    a = c;
    c = (a - b) / 2.;
    d += d;
  }
  return phi / (d * a);
}

float cellipticF(in float phi, in float m) {
  float b = sqrt(1. - m);
  float t = tan(phi);

  if(abs(t) > 10.) {
    float e = 1.0 / (b * t);
    phi = atan(e);
    return cellpk(1. - m) - cellik(phi, m);
  }
  return cellik(phi, m);
}

vec2 cellipticFi(in vec2 z, in float m) {
  float r = abs(z.x);
  float i = abs(z.y);
  if(r == 0.) {
    return vec2(0., cellipticF(0., 1. - m) * sign(z.y));
  }
  if(abs(r - ETA) < .001) {
    r = ETA - .001;
  }

  float sinhPsi2 = pow(sinh(i), 2.);
  float cscPhi2 = 1. / (sin(r) * sin(r));
  float cotPhi2 = 1. / (tan(r) * tan(r));
  float b = -(cotPhi2 + m * (sinhPsi2 * cscPhi2) - 1. + m);
  float c = (m - 1.) * cotPhi2;
  float cotLambda2 = (-b + sqrt(max(0., b * b - 4. * c))) / 2.;
  r = cellipticF(atan(1. / sqrt(max(0., cotLambda2))), m) * sign(z.x);
  i = cellipticF(atan(sqrt(max(0., (cotLambda2 / cotPhi2 - 1.) / m))), 1. - m) * sign(z.y);
  return vec2(r, i);
}

vec2 cellipticFi(in vec2 z) {
  return cellipticFi(z, .5);
}

// https://www.shadertoy.com/view/wllGD4#
vec2 cnome(in vec2 z) {
  return cexp(-PI * cdiv(cellk(c1 - z), cellk(z)));
}

float diffabs(in float X, in float x) {
  if(X >= 0.) {
    if(X + x >= 0.) {
      return x;
    } else {
      return -(2. * X + x);
    }
  } else {
    if(X + x > 0.) {
      return 2. * X + x;
    } else {
      return -x;
    }
  }
}
