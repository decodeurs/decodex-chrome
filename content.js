/*          DECODEX
            LES DECODEURS / LE MONDE
            VERSION 1 / FEVRIER 2017

              ▄▓▄
            ▄▓▓█       ▄▄▄▓▓▓▓▄╦          ▄▓▄               ▄▓▄▄
           ▓▓▓▓▄,,▄▄▓▓▓▓▓▓▓▓▓▓▓▓▓╕    ╓▄▓▓▓▓▓▓▓▄        ,▄▓▓▓▓▓▓▓▓▄╦
       ╒▌ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄  ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄▄▄▄▄▓▓▌
       ╫▓ ╙▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▀Γ ▀█▓▓▓▓▓▓▓▓▓▓▓▓▓█▀  ▀█▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▀Γ
        █▓▄ Γ▀▀▀▀▀ΓΓ ,  █▓▓▓▓▓▓▓▓▓▌  Σ▓▄,╙█▓▓▓▓▓▓▓▓▓▌   ▀█▓▄,Γ▀█▓▓▓▓▓▓▓▓█
                     ▐▓ ▐▓▓▓▓▓▓▓▓▓▌    ╙▓Q ▓▓▓▓▓▓▓▓▓▌       ▀█▌  ▓▓▓▓▓▓Γ
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌          ▄▓▓▓▓▓▓▓
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌       ⌐ ▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌      ▓ ╟▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▐▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓µ     ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ]▓▓▓▓▓▓▓▓▓      ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ]▓ ╟▓▓▓▓▓▓▓█       ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                     ▐▀ ▓▓▓▓▓█▀         ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                      ╓▓▓▓█Γ            ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
                      █▀                ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▌
               ▄▄▓▓▓▓▓▓▓▓▓▓▓▄╦          ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▓
          ,▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄▄▓▓▌   ▓▌ ▓▓▓▓▓▓▓▓▓▌     ▓▌ ▓▓▓▓▓▓▓▓▓▓▄,,▄▓╕
       ╓▄▓▓▓▓▓▓██████▓▓▓▓▓▓▓▓▓▓▓▓█▀     ▓▌ ▓▓▓▓▓▓▓▓▓▀     ▓▓ █▓▓▓▓▓▓▓▓▓▓▓▓█▀
     ▄▓▓██▀Γ     ≈4▄▄, ▀▓▓▓▓▓█▀Γ        ▓▌ ▓▓▓▓▓█▀Γ        ▓▌ ▀█▓▓▓▓▓▓█▀Γ
   ╙▓█Γ              █▓▄ ██▀            ▓▌ ██▀Γ             ▀█▄╦ ▀██▀
                      ╙▀                ▀`                     ▀▀
 */
(function decodexInfobulle(){
    'use strict';

    var infobulle;
    var removeTimeout;
    var removeAfter = 10000; // En milliseconde

    var messages = [
        "Attention, ce site n&rsquo;est pas une source &agrave; proprement parler ou sa fiabilit&eacute; est trop variable pour entrer dans nos crit&egrave;res. Pour en savoir plus, cherchez d&rsquo;autres sources et remontez &agrave; l&rsquo;origine de l&rsquo;information.",
        "Attention, il s'agit d'un site satirique ou parodique qui n'a pas vocation &agrave; diffuser de vraies informations. A lire au second degr&eacute;.",
        "Ce site diffuse r&eacute;guli&egrave;rement de fausses informations ou des articles trompeurs. Restez vigilant et cherchez d&rsquo;autres sources plus fiables. Si possible, remontez &agrave; l&rsquo;origine de l&rsquo;information.",
        "Ce site peut &ecirc;tre r&eacute;guli&egrave;rement impr&eacute;cis, ne pr&eacute;cisant pas ses sources et reprenant des informations sans v&eacute;rification. Soyez prudent et cherchez d&rsquo;autres sources.",
        "Ce site est en principe plutôt fiable. N’hésitez pas à confirmer l’information en cherchant d’autres sources fiables ou en remontant à son origine."
    ];

    var icones = [
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAA4pJREFUOBGFVV1oFFcUPufOxrYPlYpSjGVtayQqKkGIWuiDBnx0zM5udiLZ3YCoCCL40FSElhZUbEvFBxGLULFkV6uTsJNJ1AdBEJQQMS+i4k9JCjFWrb4oCk2yO8fv7uSmSVjxwuy595zvfPeeP5apyvK8u3PG5GGKFNkktBZfLbEIoE+EeAD7vviCeX5TU1NptjvPVhS8ntZQ5Gci+SKy8SNiGgUfsLxYSBZpPTP9RWR15Nzm3gg3iTYHEVGFrp6jkHuZ+A28j7EVO51pseH4/zpXLK6YKNNO8O8mkQ9Y0eFsi/M9M+sIcPfk6jzvH8GtjdDO/ZBiCde1R4ytmgRx/XiJAlA8A9dALp3cr3EVwny3n5KydONwR8bqvmpvb3iD0NtCliUIdYxYvVCKh9qSW67jJaG5IAiuf/zqv3/78YhVlqJEJp0MeHBwsObe8Mh9gGqVNWdVJrV5WDt0ev5VhLTBOGuJVPyD15zIpJ2fDPE5368bH5c7sI7EP/1kpbo/PJpE/ZYQqeOGbAYJ82XF/AcchnRBQqFDBc8/YTBbHWcIefwNRax//PylrUKSLZGRTxnQdImQz2ZdZ1vOTdQrph+1DSHuQkpWGxyLOl3RS2gDQ+tQjFGU/4EBVJM6xKybPAD8TW1HfpsNLusmbiMfz3Feq3DfQjTrI2N8r2Tu1xgO5fOZWB4V5loQwlhp2pnmd51w+etqNrxcd6KAkJ9iBuLVQFV1Iusjvfp7uh15jSPsJwqtcQNZ/izvBcumA6rt817xW6Rok54Ky7KKBvNnd7AGPPMR8kAML8QsSgbfdgD2GZCRCDGV93ztsBHt1aD1kEfbWmzdu5VVCsOdlQ1Tn1pRF/dBOoS67en0er+cxEwJpMXW842QGtANaHq1t73V6TCAs929K2HfgXDv5lLNF1VjY+OEpWQfbv2IqRwUCgNzNVgJ/a77jkntR7q3sVJfZ9PO0vbWxDFDdubMtXmlcjlACmKWUt/o1kJxolU47/+C4uiELwRd8/v6UudcqNyDcXyGGlzJtToHNdMUIZ7N+a7gIEn4HUIbx/Ek18RO5ZL2rejK6Ddf7GuQidJ21GUX3GvAcCiXdn4wmClCoyh0FTdjXn/Frcu1Di94gZdXGh99FkdOF0RYvmdZ3JFpSVwyvhF++mly73lijakeFINsTMQ6PQG6aVHfp8jnDYW/gBpxLrgul2e7vwU87WfDggy/vAAAAABJRU5ErkJggg==',
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAA5BJREFUOBGNVVtoVFcU3fvMTAdLMjd1Rk0sfRBL2hIfiI/6IfRBfwqdKoa20Ip0OnMrKOqPSkFppUofKELTYmkmQ/xpP+xTUwotKH4Um2JpKBG0hmhJg3qTmZC5k3youWe7zh3PkLED7Rlmzjl7r7P2Onvve4epweg8Ifd5Zb9LE6WZaA2RtJHgQ3wd8AFR0r98ifPd2Wd59t7jwNePBfmpVwOhD2F9NPQw/QOiMQAN9mERWWzsTDzMEd5dzCZOhbi7PzXCAyLqk7x/FEJ2MdMMiepWMembyDjDcw8k85UnWbQLuduAjTOr94u55v3MDFM1aoifn586wqRWE+lEPB7feG3LvNG5RPeuUz1+BwhPErNHrAdKuZa3DSZUOL9Q6aIg+Bq7C7G4s87bwjOp3vJroqkdkW8il8UI88j2bNMvB5ixrY5UQZq1Lp9DdpdC6caSmzjJq36X2NXB8iUIbotGaan3ZssVA0/2TJ3FHZ6+ezacQH4NBTq2I+d8YIkXHp9aEtzmCwCMLnss0alGB8ubEKFdmD61ZHUkxD+z4uMowogpiAgd6s5XjlnM+BstIxDzGXwdQ8OVtNLELxmnUqpgQXWz4i9LOSezw010kOJ3qz69dVHf9DKLi8QifeGadVphsRZVHUP5/7KARrO54mTOeQ9Kzxv/7O1gg8V5maYhpGMCKVqjSKRViNFr/3ucM0hheaT+hIyhxm1GoSl1rR/rQQ12TNMNrCgDONBHCn10AyofagRqaBN5ytih4Gq9n8Eh143C38D+YKrgP14P+Pculff3APs8RAhF1bcWsaB3ZiVEJUnRQFSJnAqIXtdaZwHYa0G1WaQr2VNeids8o0WvqNrlaCnjXLIYLbOuWStS/WFj//2HfxFyF0c53um588KrNGps3PMKqvxxyXW6LVlrT6XzFulB+C7vzCWWh8XAA79JJPgGoCG631k/uZn9ZL68Gc3ezlpuIrYXidJlL9P8q30JGELnC3kgOuOfN7io0Avjbzk/1aoLRR8RKyRcWvFkbPivvjQ5l0C+Rz49pOP0pOscNEFqhHh0ONXrH8S8D6BbcHweUZHCeLbpTwO0Y2FhekWggyyKsxW2GKp6qOg671h/jdAa8Fp6EREP4/tE1cZFFDVsfMQ0rZEydlz9Ish2T7jOj/ZsaJ+7seuXT0jkjF9Jk9Zp5Gctjlf/AlhugARtpvqfc5p/+OoVRoPUjzuxb2i5RMKYsQAAAABJRU5ErkJggg==",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAA5FJREFUOBGNVF1sVEUUPmduu5dCqyHyQCGoqbFolnbvVvnZ3UZ9MBATawlNQ4K+GIIkvvgiBtFoA4RiNCQSg/GB4JMv+FdqTEpi0pB2dwmJe9ctUiGtETZiI/pAqN277Z3jNzfMZgslMNncmT3nm2/OzzfDtMS4GO+PBdPlPg6pR5g2skgrEQt+10U4z0TDXtr9jkdHF+7cDt/i4TdldooOj4rQ45GH6RoJlwkfYn6URNYYOzNdUeS8nQjGz0S4258aoQwMKH9w5JiIvAXjLCk+TtJ4Khmcu1K/oRR77ukFnt9DQm8KictKHfHmxt9nRgYYNULf3fIJcnoWwIdijrM9Pjd2tZ7ozrXvdrdrCoeYZAax57sq+f01wmIs3ReS/ho5TaiVLVsSM2dnC02pXRxym7AEOP2GIprq2L91jAcGtCWfXJVpmbups4h0A5Panqxmh1ieeaPRnyhNomatDcrZ0FkZmzYbCm5qFOk/bzdHM/OfLHzCO7B10BKX3PQT8yITyPiql1oWV8VfL+7AxjYU+TNLVk+C6M6iLl+iC1OmIUL6cGFw5ITFdATZKez9HAG1F7NBj5JQv2KcitRJC1o0s3yVrOZfT767rR0l/zDyiez9ZUWqw+KcBjpl1kgdhEybcEIZ7f/NApaaTYpd1dxB1PmC8et57rW4ztlcCZn8jQM3KjR7NcR6zTrvOzNlDQaBPLYIK1RGhK1onhlwP+hguXUPKIInMSn/hXDX3QN0t1l4c2QU/Xu9E9GtQ1zXkTKfR5fXFt3M+nrAUmtIaR+wLyIdcYi/tRh/eSqJ9SOQTr6BHX1GQnpVk94N4zsWZGfUtw9ESUjmBZAljB1NPNYZ5CZrmFD2mDXqNxwJuzBRuoSer3FUYzxRORelspSwUZppXM9Pu4LscUvmN2fiuhoWUMDL3oFtnVEz/FhmB+7lNzi71NKsu5/89/xNf1n6Na2lTREHomgGT9dl779sDqRiyf54uGPlP5XmC3jecDH4JS/IjdS6W3DTH6E0puCrIfLe++nS1Bz3/3sQzOCW/ASNHjIH1QhRH/abUodE03swVoXVF9SgTnbNjhVtRGb+eUV3ghb0bha9F38bWfFhr5L7wGJqhNbgu6mX8Zx8jCY8FdmYbkAJkfDx8kAatOq2/RLjgU0G4z/avWa+i9AYpb/f8YfKPShWDwCbzA0wogUxNEuQGQ97vWt/4NOnQ4OvH/8DJzCCIegeDsUAAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAA3ZJREFUOBGNVV1IVEEUnjPrz92gICzIoh8MrNDdxSwLCiroJcis/QtKgggJeunFIigqSvqhCIooeoh6qYfdTbMiKAh6CFMqTK+gFSqUZKJPke69q/eevtnbSGsbNXDvzJzzzTdnvnPmXhJ5GidiRWn5IULMtYJ5rRBUKjAQJIYFi3YmeuyfV9JCW15OzVxOMw0TidBuEu4FFrxM+QD4gvcQZ4diCYgXZu0kPhHLRiPe/UjNdZsmZD4t08nUFTgOk6BxQXSNSN4xou8/abDq7ebVqxxnsoEEH0LMxUTinBE1TxAR9vR2Vb2wksHLLNw1ONcc4qKd/vi7z1nHX15Wc6icHbcV7hFE1W7EzGMKmo3QTgUjjuumEFmPYZWup33Px9OJwB54y5jJxuZjQop+Ixx5RXTa1Xtw64bZlv29DfJU+oh2FsfMVuK31YXWYKYPYpeST1QaEXNALQDhSwA36cVeT1+x6Q0jFj6via2W6uU8afcgts/G/JIKmR6YCjNzGTS5rsl+J4FGz0FyF0fpVwmBLE1W6sENjTF2vetH1m9i8/LM6FitREZ3eE55W4NyepL3/XFzvxGLloP4lPIhgIN2IhDQOB+LO2rsEtVKuGuQ0SGk/4MG5OvVEUF8Br43yu+SqNO44rhp4sijkG0tCMUCJBy19t+tzUPy0pwVJIaYuFQRgtjLdg7gLxNo+SOvC+UAIlaE3/AszgvKa6R1nlkO5rhJLIbGwxL6dSDGRVYiuCIHkGcykQgeQRBbkXmWxM0akkmFqhBdCc7ZXoBzP8JkL2Q+AMBRDdI9u25kIlFZhflmYELKTkJeKY5296mxao7rNKge1++xV9gDdi+muPRU4Y93Z4+Sr7CxYAC35qoR7bmmCFSzU6EK13U7sctHIxoJelcvGQo77DyABqaRmbWR6ju+p1OV9aiNMkhtowpGmHwf/dHO1/ojoMj4XmCuVchvQFZG5NtmRLueZQmV00oGLkKfdYJpAYjr/lWXSnPI9RC0IzjZC3/MPKt4pglR/QTSsyih4zBmcJ1uFfgKbheFO7sUULdMc1Voypk6gI/vQawuBEUTyE5q/zShNljJ0Hbc10vYYOUv2xjU9gqfWZXXPGXHwl6S1Ihv4dNfuGz3B6Gy4hfgy8i+WpcFfgGiRt0AVbSQAjXLHRLZLOKVTyiedH4nU+OfKplnuGs9E5cAAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAA49JREFUOBGNVV9ok1cUv+emiSBYkO2hdWi1g85hRQa2SYeggvRL0qaKxQ2mCMOpMMaKmCYBRYMWTdLVhzEcfSjd0x7Wzc4lbfIVBnsYbUr3MnT4j9ZSi39YYagt2LW5x9/96q1tCOhX+p17z/md3z3/7hcSJZ5DPx3yPJ983sosQoK5jklUCsYfiUckKE8k0r46X398b3yx2J2KFY2pwKekOAH/zdoG5wd4TzNeQvAm0G5wfEjck4LCuWjuN2f/6rVMGOe4HEmOXmGh2uA6B/9vPVTWm4lk7q10aEo2fbjAheM46EtmXkNCXspFB88SEc50Tl2CW0nrG+S0E+pyj3AfSMfSUyuJitfBrmBNYaFwnYmf6DLYUTumMU6EVirYyqrwM3Y3RSX7ho4OzVmJ4GckVTVSnGchZ1wuMV5/uv7POMWVIW/paVn3YmZ+GJhacokDdrt9nU50n3BP/jd1G2SVbo+rduDUwIR2aEz6/0BDdhtnR5J4KIS8+nHEe9kQB1KB9wtK3USUUw1e3zY5+fTBQRS7Gg7fGbJVJIKGAP4BNRp3GsKqY7gzf9VgspHsOBL9Hk2syf+VD0lSqkUbpRA9BrRSShI/2rHc5w0RXw1Jed6xKT4ZTAS3G1yZkL16zYpD4BH1OH0a7b9jAKWkTtGOZC8g2jFtV1LtN7jB2OAN6P9Fm+skXhUwYNbe9qFhjcTQVxV5TKMklTpCyKVuFwFKb0nNljJgfJAoMUokHoNxYylQSR2T19ET319lBweifiTBOooY3/Mn/R+sApTYANOObu5DPszSc81AAl2Bj7B+BwHmy3B99F08jGk9BhkxICMVi1YroR3UHsW8Q+uR1RU7nL69jFlQx/VaSpmWVeur+hElZkl8FeoMbTGg15JD+n6jziCjCaTUhmsWNnYrYW3D1+gLcPzjDXsHnKuHVA7i9F/gcMO1lnZlv84+83f6jzCTc/WQyhOlXHftaGZEF96QNV1uWr8oC2MoQ7VkCuRiOdsh1AArFUgifS8UFfjf/6a51DUH/lf0Fh8H/h1RX9Q8y4Qwkj/lv4hOncGQ/g9DN7vLeuzTmb810DxWV/MOWlg8hjBPYlTc+Hx12NHsOWNfJjSKxlSwmVShEw5btQ4pzmCslgaf9Gjwuw6WxC3UM5yL5AaNr4NfuTFr/AS4nt6fDRGrEAper2+Arh1q9RhHjJLkdHlVeabvk76C8THyJbGObovwGKZ+AAAAAElFTkSuQmCC"
    ];
    var msg_bandeau = [
        "Attention !",
        "Attention !",
        "Attention !",
        "Attention !",
        "Informations !",
    ];

    var heights = [213, 180, 212, 203, 213];
    var colors = [
        "#A2A9AE", "#129AF0", "#D50303", "#F5A725", "#468847"
    ];

    var class_colors = ["not-a-source", "satirical", "complotist", "dubious", "trusted"]


    // Helpers function
    function closeInfoBulle(){
        clearTimeout(removeTimeout);
        infobulle.style.opacity = 0;
        infobulle.style.transform = 'translate(0,-100%)';
        removeTimeout = setTimeout(function(){
            removeElement(infobulle);
        }, 1000);
    }

    function clearRemoveTimeout(){
        clearTimeout(removeTimeout);
    }

    function removeAterTime(){
        removeTimeout = setTimeout(closeInfoBulle, removeAfter);
    }

    function removeElement(elem){
        if(elem) elem.parentNode.removeChild(elem);
    }

    function forEach(arr, fn){
        for(var i = 0, l = arr.length; i<l; i++)
            fn.call(arr, arr[i], i, l);
    }

    function createChild(parent, tag){
        var elem = document.createElement(tag);
        parent.appendChild(elem);
        return elem;
    }

    function appendText(parent, text){
        var elem = document.createTextNode(text);
        parent.appendChild(elem);
        return parent;
    }

    function isVisible(elem){
        return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length ); // Merci jquery
    }

    function css(elem, styles, important){
        var i, l;
        var merged = {};
        styles = [].concat(styles);
        for(i = 0, l = styles.length; i<l; i++)
            for(var style in styles[i])
                merged[style] = styles[i][style] + ((important) ? ' !important' : '');

        var balise = '';
        for(var attr in merged)
            balise += attr+':'+merged[attr]+';';

        elem.setAttribute('style', balise);
        return elem;
    }


    chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
        // Supprimer infobulle si existant
        clearRemoveTimeout();
        removeElement(infobulle);

        if (request.text.indexOf("debunker") != -1 ){
            var note = parseInt(request.text.replace('debunker', ''));
            // Ajout du contenu

            forEach(document.querySelectorAll('body *'), function(elem){
                var style = window.getComputedStyle(elem);
                if(style.position != 'static' && style.zIndex == '2147483647')
                    elem.style.zIndex = '2147483646';
            });

            var body = document.querySelector('body');

            // Création de la structure du popup
            infobulle = createChild(body, 'div');
                var header = createChild(infobulle, 'header');
                    var title = createChild(header, 'h1');
                        var picto = createChild(title, 'span');
                    var close = createChild(header, 'div');
                var content = createChild(infobulle, 'div');
                    var text = createChild(content, 'div');
                    var more = createChild(content, 'p');

            // Ajout du style
            var forceImportant = true;
            var currentColor = colors[note];

            var reset = {
                'display': 'block',
                'position': 'static',
                'box-sizing': 'border-box',
                'margin': '0',
                'padding': '0',
                'width': 'auto',
                'height': 'auto',
                'min-height': '0',
                'min-width': '0',
                'max-height': 'auto',
                'max-width': 'auto',
                'background': 'transparent',
                'z-index': 'auto',
                'transform': 'none',
                'top': 'auto',
                'bottom': 'auto',
                'left': 'auto',
                'right': 'auto',
                'border': 'none',
                'outline': '0',
                'float': 'none',
                'opacity': '1',
                'border-radius': '0'
            };

            var resetText = {
                'font-family': 'Helvetica, Arial, sans-serif',
                'color': '#2e3942',
                'font-size': '13px',
                'line-height': '1.38',
                'font-weight': 'normal',
                'font-style': 'normal',
                'font-variant': 'normal',
                'text-decoration': 'none',
                'text-align': 'left',
                'text-indent': '0',
                'text-transform': 'none',
                'letter-spacing': 'normal',
                'direction': 'ltr',
                'world-spacing': '0'
            };

            css(infobulle, [reset, {
                'top': '20px',
                'right': '20px',
                'position': 'fixed',
                'width': '215px',
                'border-radius': '2px',
                'background-color': '#fafbfc',
                'box-shadow': '0 0 10px 0 #5d666d',
                'transition': 'all .5s ease',
                'opacity': '1',
                'transform': 'translate(0,0)',
                'overflow': 'hidden',
                "z-index": "2147483647"
            }], forceImportant);

            css(header, [reset, {
                'padding': '10px',
                'overflow': 'hidden',
                'background': currentColor
            }], forceImportant);

            css(title, [reset, resetText, {
                'font-size': '15px',
                'float': 'left',
                'line-height': '20px',
                'color': '#fff'
            }], forceImportant);

            css(picto, [reset, resetText, {
                'display': 'inline-block',
                'width': '22px',
                'height': '22px',
                'border': 'solid 2px #ffffff',
                'border-radius': '20px',
                'vertical-align': 'top',
                'text-align': 'center',
                'line-height': '18px',
                'margin': '-1px 10px -1px 0',
                'color': '#fff'
            }], forceImportant);

            css(close, [reset, resetText, {
                'float': 'right',
                'overflow': 'hidden',
                'width': '15px',
                'height': '20px',
                'background': 'url(data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2013%2013%22%3E%0A%3Cstyle%20type%3D%22text/css%22%3E%0A%09.st0%7Bfill%3A%23FFFFFF%3B%7D%0A%3C/style%3E%0A%3Cpolygon%20id%3D%22_x2B_%22%20class%3D%22st0%22%20points%3D%220.7%2C1.9%205.5%2C6.6%200.7%2C11.4%201.9%2C12.5%206.6%2C7.7%2011.4%2C12.5%2012.5%2C11.4%207.7%2C6.6%2012.5%2C1.9%2011.4%2C0.7%0A%096.6%2C5.5%201.9%2C0.7%20%22/%3E%0A%3C/svg%3E) center no-repeat',
                'text-indent': '100%',
                'white-space': 'nowrap',
                'overflow': 'hidden',
                'cursor': 'pointer'
            }], forceImportant);

            css(content, [reset, {
                'padding': '10px'
            }], forceImportant);

            css(text, [reset, resetText, {
                'margin': '0 0 5px 0'
            }], forceImportant);

            css(more, [reset, resetText, {
                'font-weight': 'bold',
                'color': '#16212c'
            }], forceImportant);

            // Ajout du contenu
            appendText(title, msg_bandeau[note]);
            appendText(picto, '!');
            appendText(close, 'Fermer');
            text.innerHTML = messages[note];
            var icone = new Image();
            icone.src = icones[note];
            css(icone, [reset, {
                'vertical-align':'middle',
                'display': "inline-block"
            }], forceImportant);
            more.innerHTML = "<span style='vertical-align:middle;'>+ d'infos en cliquant sur &nbsp;</span>";
            more.appendChild(icone);
            // Bind des event au clique

            close.addEventListener('click', closeInfoBulle);
            infobulle.addEventListener('mouseenter', clearRemoveTimeout);
            infobulle.addEventListener('mouseleave', removeAterTime);
            removeAterTime();
        }
        else {
            if (request.text == 'report_back') {
               sendResponse({farewell: document.querySelector(".yt-user-info").getElementsByTagName('a')[0].href});
               //console.log("URL CHANNEL ---> " + document.querySelector(".yt-user-info"));
            }

        }
      });

    /*chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
        if (msg.text === 'report_back') {
            sendResponse({farewell: document.getElementsByClassName("yt-user-info")[0].getElementsByTagName('a')[0].href});
            //console.log("URL CHANNEL ---> " + document.getElementsByClassName("yt-user-info")[0].getElementsByTagName('a')[0].href);
        }
    });*/

})();





