import { graphql } from "gatsby"

export const dropups = [
  {
    value: "Academics",
    fields: [
      "Branches",
      "CGPA",
      "Branch Change",
      "Scholarships",
      "NPTEL",
      "Research",
      "First Semester",
      "PG and Phd",
    ],
  },
  {
    value: "Co-Ciricular",
    fields: [
      "Cultural Groups",
      "Technical Groups",
      "Sports",
      "Inter-IIT",
      "NCC/NSS/NSO",
    ],
  },
  {
    value: "Campus",
    fields: [
      "Hostels",
      "How to reach",
      "Places",
      "Gallery",
      "Healthcare(Covid Measures)",
      "Eateries",
    ],
  },
  {
    value: "Student's Corner",
    fields: [
      "To-do list",
      "Packing list",
      "IITR Lingo",
      "In campus commute and payments",
      "FAQs",
    ],
  },
  { value: "Experiences", fields: ["Freshman", "Alumni"] },
  { value: "Placements", fields: ["Analysis"] },
  {
    value: "Parent's Section",
    fields: [
      "Anti-Ragging policy",
      "Banking, Fees and loans",
      "Where to stay",
      "Secqurity",
    ],
  },
]

export const h2data = [
  {
    head: "Campus Groups",
    Content:
      "It is a general belief that a branch change is a big task and a very difficult thing to achieve. ",
    src:
      "https://storage.googleapis.com/picxystatic/cache/2019/7/4/0233b76936525adc4c2e68292d82a516.jpg",
    link: "/campus-groups",
  },
  {
    head: "Hostels",
    Content:
      "It is a general belief that a branch change is a big task and a very difficult thing to achieve. ",
    src:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAsHCRcXFhoXFxcaGxoaHBwcGhoeHBwaGhoaGhwcHBoaHBoeJDEnHiAuIRoaKTwpLjI1OTk5HCY/RT83RDE3OTUBDAwMERARIBQUITouJi43Nzc3Nzc3Ojc3Nzc3OTc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIcBdAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAEQQAAIBAgMFBAcFBgUDBQEAAAECAAMRBBIhBTFBUWEicZGhBhNSgbHB8BQjMkLRB2JygpKyFSQlouEzc8JDU4Oz8TX/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAmEQACAgEEAgMAAwEBAAAAAAAAAQIRAxIhMUEEURMUYSJxgaGR/9oADAMBAAIRAxEAPwDVO+TUxBYRVnrXscVCUwimRCR8sl0BMGSBkAJJREAQSYgxJiSUSEVogI4gAxWLLJXks0dioHaV6q9JbJEG4EqL3FJFF1gHpTQalBPSm8ZGMome1ODZJo+rN90i2GvNVk9kOJmGmZFllmvTKm0rkzWLsyewMrIEQpMa8oAREYiEMaMQK0a0NaNAANoxENfpGJ6QAFaK0KQJHLAAeWNlhSsbLAAREVoQrFlgMHaK8naOqRMEQEkqywlE8oUUbSHJFqJWCwiIYYKJIFechspIGFhVBi9aokHxI5RU2VaQWMzCVmrGDZmMekWoNUqd0rPVERUmOtKNJIVtgs5ih/s8UepCpm6DCoYGEQTz+jqDCPaQWEWSyhisbKYUCPlhqE0DF5NWjMJBnjqxXQdWEmLSka8X2m0fxSDWjQCyQWUqeLBlhKwPGRKEkNSiwpWQZBJh4zNErK2B+qEg9ICGBkHJlJslpAXXlpAE2OsskEwRo3Os1i12ZyT6KeLYHhM10m96gd8g+GE3hlUdjKWNvcw8h5RGmeU2fsl5L7L0mnzoj4mYPqzyk0oE7puDDrykqNFd9hvPkSBJfkJdDWFmK2DblINhmG8GdNTSxkquXjI+07qjT4FXJzCYRjwjthSJv5V3AiVcZRIUlbFuA3b4Pya3Yvh6RT2fs31hYX3A2/i4X6StiMIysVYWI4SeH2ytOsqsQCAFIAP4rjUm1rk9ePunQbRQZQzG5Y3U/unWx+uM4sXnSllprZ8fh0z8WKhae6OWameUiaZ5TTqVeVpXqMZ6im30cLiiiUMXqjLDMYbDUixA1lOVKxJWVEonlD06NpqnDC3zj/Y78hOd5kzZY2ZoHKRqg8TNhcCvOSODWR8yTK+JnPsJIUmO4TbGFUcIQKo4RvOukNYn2zDGBaGTZvOa9xFmEzeZspYkZg2eBGOD6TTLCRzrxh8sh6Imd9jAjrheku1Kq8LSAxKiGuTQaYoD9lihPtYihcx/xIXk1YxCQxNcIrMRoouZm5JK2AdLwgvMHBbbLVMuUEE2Ft9ibd3Wa2KxK01zM1h5+4SFOLVrgbTRZu3KQat18NZm7ZxqrSN3HaW623nlOXwuNu1yWvmU6HUHTMfePgInlipU6BRbVo7Y1SYiCY9AqyhlIIPESZYCdCa6Mn+gWpHnIGlCVa9t0rPUJm0U2ZSaRMraOKtuMCWkbTTT7M9XosriSOMKmMPGUcskoieOLGpyRq0sWDLAqgzGRpapOZhLCujaOV9mgbRiJVNUCQ+0yFjkW8iLgURisq/bAOZg3x54LGsUn0J5Iou2PSSDDiD4TNGMaOMa3ECN4ZCWaJedOUq0C12HssQO42b5mPSxYhaFcanTUknxsPK0mUZJrYpSTXIy1SN4k3N4Y5WEDXRl1W3viTTfpg00vwBUptwMHhgQ4vwN+ki+MYaWF5PBXJuTe8y8jNpi4+zTDjuSkY9X0aqNVZgwNNnLb+1Ytmy2Og5XHCdTj8MWpLbev5eY3adYahLlMTzI5HGSa6O2UE4tPs5qjgh+aFbDLabOPwWdTlOVuB4HoZzD1GUkNe4NiDwM9jBleZWnuujz8sFj2a/0OcML7odFtuAEo+tvzEcOefnN5Rk+WZKUVwaR74xYytTqg7yY5N+My0Vyaaw3rbb43rxAsINrwUELUy4tQHjCFJTotLYbSZyVPY0i7IPYb4PMshiG6So9Qy4wtEylRcqFZVfvgS3WRJmsYUQ5WTYCQzdJEtIFjLomyd4pC5igFl/E42nTYB2tfcdTrutpMH0m2upX1S6E6te2g3ruPHQ+8Tndo7Td2bXslmIFybC/A8JRzBjck3niZMzkmujtjHtlyjiSpzA5WXcevOFqbUqBbF2Y3Dam9t4tr0lFmsN3vv590G58t95krRdWaNXGF1Usw7IyjThe8CKtrWIKk8t3D4Smu7XcfjLNMXWwA0JPLSw+FvODdsdGjhcW6EZWIO8AXI1GtwdPfN3A7aNvvSoJNgVO/n2ek5tnqNY3AW4B07Kk9/SHXCMrKzopUk5Rcg2tvJA0G76M68MpR3XH/DnnFPk7PNfUbo1pi4DGGmqqxBAuoAIPE7zrqDpLuLxasuZGYMqlsoPFTYhrA37uXl6C8iOm/wDhyvFKy45sCToBvJ4RAjmJyoxdWtUa5sLajXKAovqD3Xk1xN7KNDzv36g366zH7y9bdF/Wfs6rLFlmem16QCglibDhY7t5mlQqBlDLqDqJ1QzRk2k7MZQcd2iOWKGtJBJeoigIaEVVbofKI04DObsMrdkXvwOoGh98jJljFW3RpGMpOkrLDYcyBoHlKy7SZdyn+oH4S1gsTWqblUfi53uAbec5n5sVxubLxZP8GFExxStA1K1fu/lEWBWozEM7AArusN+/XhukS8/bZFx8TfdljKRw8pBWIBvpYn4kxsZhmLH7wm55/K0p1sAcpu3mfmZj92b3SRr9WK7Zr0KoyliygC29gDr0kjjqXFx5n4Svh8IgQhl1IXvvrxPWAOBXkfIfATN+VJ80WsKXBWfGKWNjfXcLy1TxqpoVYm3BeYvbviw2FysSBpa2vfLWLCsQSF3AXPQc5zzm5Pc1jFJbARt4Lupse9svylrZm2atVlApqqk2JJJNhvtrM5/Vgb1H8wELsvGUqbKS6izXJvfQnp0MlxVFJs62mwPfy4zE9IqChla34gQbc1tbyPlNimVqKGQ3BFxwuDqLX1HwlbE4UtZG1W2YHc1+nCV4+b4sib4/BZoa4tLk5k014GQKy3icIysVP0OGnCANMz3F5GKr1I8r4Z3wweskHIksp+gYxU+yfCQ/Jxe0UsOT0IVoVGBgMreyYlVhqFHjM5eTi6ZpHDk7RcVZNjKRarwCjxMYtWv+JR7pg/JibLDIM6k8TBNQPMSLLVO+ofcAII4VjvqN4xry64Qn47fYU0eciyKOMEcGOLMffBvgk43/AKjD7r9B9ZewjFR+YeIg2qqPzL43i+zJ7IkHFNb6L4Xi+5LpD+vH2L7WntCKA+0p7I8BFD7U/SH9ePtnB5vr63yStr/zII+toz3vu6d3WcJqHdbjjpeQRSwOuqjQHeRy132kqZG73EfpIfhbQcQRx6xJ9ATfcvXXoAZY9VUNsqMQRvCsQfeB1nY1dhUciHKufL2hlB1voLcN/wAJpVsIvq0UMwKgggEgDpbcIUVpOa2Jg3Cs1Wk5pMMrHKbLcizH2R1nQY/DtUpladjYA31OUDuBNyL2khSpCmqse0GJJzDiAOJ6TZ9E6SKr2KncLi3U2v7xOiPkOMHGtjKWBOSdnndZnClDoQSRuBv7xz7uMp0cSUbQ9peI3btbc95E9qrYOm47Sq38QDfGY21PRvCmzCkqm53DKP6RYTlllbNFiPMkZcrGw5FdxOtwR1jqxNio3ngdbnhPTdnejeFZWDUUOo1ygHdzGsHjfQrCkEqHQ77Kxse8NeJyr/B6GefUMIzMAW1NrWNwOhI9839i1WW6togyhSRbMza6dDy36zRT0apqQQWuDcEtxHdaWqWByqFU2A3aX8yZ04M0Yu6dmOTDKSrYWWLLCfZz7Te6w+Ub7KPaY++dj85dIwXiPtga1VVF2YKOptBLtOmuazDUW0DHjfgOksNg0I7QuOpJHnMmpspcxsulzbRiLeE5s+d5VVUjfFgWN3e5ZO1aPM6/ukfG0Gm2qaiyhuOvZ47+PWQTZi+z5H5wq7PUcB/t/Wc1G9gDt0ew3vP6CRG2mB7NMd92/SHNGmN7KO9lHzk6VNG/Cynho1+m8CFL2G5Tfa9U7lH9JP8A5SJ2hXO4AfygfG8sNjMOuhqr5n4CQ/xPDX/6gP8AK3xJi29huV2xOIP5j/tHwEi3rzvZv6m+RmlXxNJUFRs2UmykLo3dc6yi23aHAOf5VEf8QpgDhqh3t5sfiYwwDHiPAH5TQ2dtNKrZVRsx3XKqPEQO0Nsik7IabXU2PbI1tr7oWgpg6eyGJvu62tNDZuxFLqGZiMy3HA69ZkN6RA7qa+9iZu+jddq7ZgqLlOY9kkm2tgdw3SW0NJnRtgmp60zoPym9vdxX3XHSONoBTdgQQLZdLkXG7Wx3yjs70roPoxNMndm1U+8aj4TXYK7K1gwIOoswI6ETB7cGv9lbHlS2aw1A375SdlHKExlAhso/CADbhfW9hwlR6MFJ2DQ71F5jxEE1dfaEG9EfRgXoD61mibIZOpjEHHyJg2x6cz/SfnBvhunlBHDdPIy7YiT7TXk3+0fODbaaj8reIjNh+nl+sg9ADf8AL9Y1YrIvtbkn+4/pAttZuCjxJ+Ud0HD5D5yBUdJSixWQbaj8FXwJ+cG206h4C38P/MIyfWsGV+rGVpYtRXqYuqeJ8h8oF3c8/r3S2y/VoNl741F+xWilmb6MUtZe/wAooaX7C0cigPPQRlIve9+FpAVSOfjJU8SVN1tc9OfOZq7GdxS9F6Rpow/Ey3YEtoTfS4PK0v1vR2gtBWsFbW7G7a3NtDfdpumdh8KtgWdmNuekrVMRTzindswF10FgB+9K03/6Fo0hhKh3ux89eW+S/wANP5ix77jw07o/pgyUWp5mZc1NSoDNqw0O7jug/TPC2XDkaZqYvqdSLanxkt7J/tDDps5RbNcDjckX14Xt3TpfRjB0wr2Hs65uh5Gcr6R4YDCYVvzFbMeJ7IOp475coUsuyWtoSw8PWCKXD/uilsdwMKtrqWv3kjzvKO1aLdmznLrvNtdOU5T0J2a61kdtEIawuQbi2tp0uHZirFmLfeNa53DgB03TKUaKTLOxsOcrfet+LmCNw98s471irowNyBu3Dnx+jFsm2U7h2j04CWMTUW1iy3O4XkyQ0znqxf2vIfpKVQv7bfXdNivUT2l/qEpGtT1s39wlxTIkzLdXP52/qP6wLYdjvZj77zRrYheA9+sqPWU7z5TZRIbKb4UHnL64PNhHbMwIZRcEjs3AtodBr5Ssa6/Vps4Zx9iqtwvf/cojkkkCZyGIwAP5397XHnNbZ2B/yOJzdplVip42ABlJsYpvru6ib2yGDYLEsNxV/JSIppJOgi3Z5oG6Ts/2aUg1V82oyjTxvOVSnv752n7OEs7HoPjJa2KTOJxuZajrb8LMPBiIMA2J5dT8Jf2nT+/rf9yp/c0itK6sYq2HZ1e26X+loRvDIT7ww+c4lASQDO+2+wXZYJ3Bk/utOA2XilqOFAOYnS/Hug1yFnR+hKkYscgvxIgfTOmRja1ibZlPiimbHo/g2pYsBlykqptpuN+XdKnpmo+2Vf5NeH4F4xc0Mx0wjGmWAa1wCbaXPC87L0CpFUcEa5Tv63i2JSH2RbjT1yH/AHiamwltUqj63GSuwaOL2FhvvqYOoLC4no+EpgO1t193AWVbADhvO7nOK2XTtWp217XynXYuqUzsN+b4qusmSGi3jU190zyFN7EGxsbW0PKZeI2nU4i/e36TOOOfNYAakki5sTbjY6xKHY2zoHTv8YJkH0TMT7fUGgCDefzanTr0gnx9b93zM0USGzaZBx8zK9Vl5TFatVJvdQT0EC71DxH9M0SFZrOw6CBdhzEy2NT2vBZDt+0fAzRNEmmxHMQbOOYmcS5/M0iyt7TR6hUX2cbrwbsOvhKQpseLeUg9FubeUal+BRcZvq0G5lU0ep8RBtSHPz/5hq/BUWswilf1A+jFDU/QUjjbydKtltax1tYgMCCLEWII4wKmGRRYHjfnzOky4KOxWqwFsyjhqT+sgwNxqu/fxPS95mVtpsFF1W4PauPIcoVcaWanlYWLILW11ZVO8dR4ylNbf2I6309W70hcD7sb7X/EecvelmBZ0QqBanSu2ttL8Of4Zn/tBZvXUlA0KqCbfvHTv1nS7YYBHBI/6K+bNMJS/iq9miVtmJ6TUv8AK4VeS/8Aiohyn+l25sP75R9P3ZaeDVSRdu1a+q2W4PSPtjGZdnogDAFlDMLgA5gVFxwJsDKv+Lf6Lv8Aw3fR1taa9GPmB85Zot9238bTjdlbQqgswYEqGHKwBtYWHMTDx+1q6AfeNZmJsDcX0vYSZfyfAXsegY+v2AFYjtG9iRy16zIYNc9pvE/rA08awos7KLqGYAHeFF9eRgtibS9emcrl7RW2bNutrew5zRRQmybKP3vP9ZCpSA3hj9d8Bi9rFcStAICGA7WbdcE/ht05y7jauWm7DeqsRx1AuJVbWTZWFJSDoffb9YNkX2T5QexMY1SirsQWOa5Gg0ZgNL9JX2tjmSrRRSAHazAgXIzKNOW8yqCy49JRrl+E6fDL/pzi3Dd/MJgMd31y6zoKTAbPa5+s4kzWw4nF1FVSzEbvfuFzoBOw2GP8hX/gqf2mcFtnaGVTkazXFjodNOd+s7f0ZqltluzHVqTEnTUlZMqphHk4dyq6swUEm1yBc++dt+zi12KkEW0I3HWed7bYMqgHUMb+E7/9lq2pqea/MwtUxrk5nbDKtaqWYKDUe17C/aYy3snBmtRqNTsyqrEm4toCTbmdJi+mbBqjEEW9bUN+H4jOo/Z2v+Srfw1Pg0UnS2KStl30z/8A47fxUv8A7Fnnnojri6Q/enofpuf9Hb+Kl/es899Ely4imzEBc3HrbU8oXsxej1bED/Pr/wBtfi05n02xlFcXUVms3YuO1xRbbhOoqm+OX/tr8Wnnn7SlvtGrblS/sWTHhf0N9nebMT/JAbu2uo3j7wC8uejC2aoCbkaX52BmRsjaNN8IVVu0rpcWP/uKd+6bHowbtV7/ANYo8Mb6OX9GMSlSsppkkBrG4K62vuI6zt8W63cMeI/tWea/s8Nn/wDlP9ondbWb7xv5f7Vg1bC6KGJufw2A6gE/8Smb3F9Oot8905v0+qkNRsxHZfcSPZ5TX2U33NHX/wBNdf5RxlJCstVVJ3MfEfKVmpN7R8/1ly/X4Tz/AB9U/bTZjb1y8dLFll1tZNnZ0L63Y+8/qIq1InUMf6jbytHQ9o/raFvp9GUkJlFsOfaPvJkaK77/ABPlOO2O/wDmkF/ztx6NO1pHU/raCW4A6tAH6Jgjhhz+Hwluo4Auf1nGil98Gufxht2n4s1r3lOO1is6VKQDbh4b/dJ1KQPAeERbtfQ5yZP1e8KCym6INGYA9SF8pHIN4IIPcfAzA9KV+/Gn5V+LTX2N/wBBPf8A3GFK6Cy/TAtu8ooalh7gHMN3MxoWhUzkcTs5m1VdfC498tbKwbIGLL2iAANCO/SbgEe04I56VUbaEZGFoksRVRim/KCAWIN7XM6jZhpZEVsqhTmCkjRs1wpPEC9pQCiLKOUf2PwNKOg2hVpV3V3ZRlAsoYWJBvc8eUPjsctQ3ZlAyhWAIsQpJHHTeZzOUco5A5SfnXodG/tWpTr5QzgBR+UixGnhulvHLRqYZafrFAVlYAEE2QhlNu8TlbD2fIRxb2R4CN59qr9HSOh23jPukC5Wy5rqN9jxNr/RnN4XEMoZWS1gTcg6BvdJW/dXwjFOg8ILOl0S4ogdo1QQoTsg3JIN7d3DWTpbUqesOZOwAd182m4xvUn6Aj+p+gbR/ZFpQTHbXYL2EJYnS+gA4mPhtpkKodTm/NYaQRpDkfG3zjepH0x+Ua8oWhFartKp64WUinpfTUjW/mfKWcTtCytlUlrdm40vF6lev9RiGHXqfeY15SQ9C9gNn7QbT1wbVrAqPy2327wZu47GB6DooZVRbhiNDe1tw0NzaxmQcMpNrEnpqZZXZbBb1HNJGABGpZluDYU+V7ake6NZnJ0rDSl2ZOF2crlczZcw0PHs3N7HnpO0w+yiuDYNULZlZgN2VVFja3jMJKqLZaaDQWzNdmN9/HKN/ACaNFsRWUL+FFBW5uqhTvW3EaeUuUW+BRUUcl/grMqkVFOY6CxJ1OUgjnvPunZ+h+MpURSprmYtZTcAZTqTm7zeQSlgKIGZjVYa2W7Le99AOyNespYjalINmo4ezDczO1weeVT3cZEpxW1h/FcsltDYLO+If1irTXPUykagAkkAjje9u+E9HsbRoUKi5iykEMcrX7V+HvMzf8SrlaiswIqizAjcCbmxGuvW8pCmQCBoDwGkz+RLboFJHR+kRTEYILmZQQpUHmDe5A37hx4zksFswplZqir+YWuTYEfIk26TSOLfKVzdkgAi2hA3SsUvYEaDQdL7+MpZo1uDavk67/G6ArLULEsoWmb9LnMSeHamN6XYAVcQrCoF9aFYXNxoNDp/CBMzJvN9+++7dxF9ffC4qszlSx/CAq6WsF/CBFHKkN17LuxsIEDhqxGVTUKgdk5WUg2B13bp0Po/tmipWzZmqknQbtMxDctDOLF7k5j2lynXhvIhMJVNNsy20NwL6brbgNePjB5F0wVezT2ZToYPE1AH9YhqnKbW9WxK2JLNqBYrmE6PbmKRQtUsAtXdfTtLYHja2gM4PEgNfMouWLXud5Oa1rbtd0t4nHM6KjBSqfhBt2bnW1gNY1kXLG64sv4Payuz6qFVgqHcWFtSQeu6VdrbV9WuZdWvYfMn3Sg7LbRVGoPnrI4h1a11GnwlrJGidumX8PthWoszHKQWsBa+XgQOJiwe0qBdlTsrlXKGAGVVvoCNPxMdOGhmU9FdLLbUaaC490H9nUai981xw371Ou6NzTXPAJ0aeL2sEdcpDKc2Yg6iw0tLmz9oq9NWYhWN7i40sxA8rTFq0kOoXW46aX148pIquUgDgen/AOSlljfJNd2bT4lPaEzTtMLUCjVSCSwOtxwt9b5UVQF/Nu3XG/vtAvg0Y3JYd24eUr5YsNJrnaFNkViwFxuJFx0lfDVaDG6lSR4zOpYanY5g3HppfTyjUMLTBOrAA6btRYfOP5FQaTRxuMCAspBItp36RYTaauzKdAADfqRKOIpISts1tc2hPdrfSPlpKwIB10N7nh5Qc99mGk1jXXnBVao5iZ9RUtcNYjXSMtFCBduGt9ZfyIWliqekDIcoW4XQdwig/sFP2vrwikX+lUbYji0UU801HLCLOIoojNtj+sEcVByjRR0h6mSzdPhGNTpFFNFBBY+eMKhjxSviiKxs8Yv18oopLgkQ5MWfqYxYdfKPFIv8FbGzjkfGN60coopHyMVsj6weyJN8Uzb9eV9fjFFK1yJ1MiHN77jwtYfCM7lt5JtuuSbeMUUh5JMYgsVjHiiBDFTEViigMjlitFFGMbKImUR4o7GDZBIlTziijQiLJ1jFevlFFGmJDFY2WPFG2xjFY9rRRQAaNliiggQ9pArFFKKGIjERRQAgynnIkRRSkA9oj3CKKADFooooxH//2Q==",
    link: "/hostels",
  },
  {
    head: "Eateries",
    Content:
      "It is a general belief that a branch change is a big task and a very difficult thing to achieve. ",
    src: "https://www.iitr.ac.in/estateworks/css/images/recent/tower3.jpg",
    link: "/esteries",
  },
]

export const testimonialExcerpt = [
  {
    text:
      "I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy for the job. He is a true professional.",
    author: "Ketan Dhanuka",
    branch: "Applied Mathematics, IITR’24",
    source: "gg_logo.png",
  },
  {
    text:
      "I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy for the job. He is a true professional.",
    author: "Ketan Dhanuka",
    branch: "Applied Mathematics, IITR’24",
    source: "gg_logo.png",
  },
  {
    text:
      "I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy for the job. He is a true professional.",
    author: "Ketan Dhanuka",
    branch: "Applied Mathematics, IITR’24",
    source: "gg_logo.png",
  },
]

export const homeColumn = [
  {
    heading: "Student’s Corner",
    body:
      "It is a general belief that a branch change is a big task and a very difficult thing to achieve. However with a little hard work and focus it is possible. The modus operandi for changing your branch is to get a good GPA. For this, firstly attend classes regularly. Though this might seem tedious and boring, it has its benefits.",
    to: "/",
    isReverse: false,
    backdrop: "tr",
    image: "dummy_image.png",
  },
  {
    heading: "Student’s Corner",
    body:
      "It is a general belief that a branch change is a big task and a very difficult thing to achieve. However with a little hard work and focus it is possible. The modus operandi for changing your branch is to get a good GPA. For this, firstly attend classes regularly. Though this might seem tedious and boring, it has its benefits.",
    to: "/",
    isReverse: true,
    backdrop: "tl",
    image: "dummy_image.png",
  },
  {
    heading: "Student’s Corner",
    body:
      "It is a general belief that a branch change is a big task and a very difficult thing to achieve. However with a little hard work and focus it is possible. The modus operandi for changing your branch is to get a good GPA. For this, firstly attend classes regularly. Though this might seem tedious and boring, it has its benefits.",
    to: "/",
    isReverse: false,
    backdrop: "tr",
    image: "dummy_image.png",
  },
  {
    heading: "Student’s Corner",
    body:
      "It is a general belief that a branch change is a big task and a very difficult thing to achieve. However with a little hard work and focus it is possible. The modus operandi for changing your branch is to get a good GPA. For this, firstly attend classes regularly. Though this might seem tedious and boring, it has its benefits.",
    to: "/",
    isReverse: true,
    backdrop: "tl",
    image: "dummy_image.png",
  },
]
