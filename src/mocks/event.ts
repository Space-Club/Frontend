import { GetMyEventResponse } from '@/types/event';
import { HttpResponse, http } from 'msw';

import { END_POINTS } from '@constants/api';

const myEvent: GetMyEventResponse = {
  data: [
    {
      id: '1',
      title: 'test1',
      clubName: 'test',
      startDate: '2021-10-10',
      location: 'test',
      status: 'confirmed',
      poster:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQUExYUFBQWFxYYGSAcGRkZGiAdHxkfISQfICcfHyQfISoiIiIqHRgZIzQjJysuMTExHyI2OzYwOiowMi4BCwsLDw4PHRERHDAoISg7MjAwMDAyMTIwMDAyMDAwMDAwMDAyMDAwMDAwMDIwMDAwODAwMDAwMDAwMDAwMDAwMP/AABEIAMgAmgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAGAQIDBQcEAP/EAEgQAAECAwUDCAUHCwQDAQAAAAECEQADIQQSMUFRBQZhBxMicYGRobEUMsHR8CMkQlJykuEWM0NiY3OCorLS8RU0U5ODs8IX/8QAGgEAAgMBAQAAAAAAAAAAAAAAAQMAAgQFBv/EADIRAAIBAgQDBQcEAwAAAAAAAAABAgMRBBIhMTNBYRMiUoGxBRQyUXGR8CNCwdEkofH/2gAMAwEAAhEDEQA/AD7bm1JdmRzk0LKSsJATVjU5kaGKdHKFZn9WaAMOin+6G8p6T6MlsBNDl6ksqAjZliVMSu7LCrocm/dbOgJrQHCOXGCauzsUKEJQzS9Q6Tyg2cP0JvAXU+d6PHf6z+sETXZmYN29LxgMRs5RliaJabhBYmY1BiwJeORanAYMK9j8cTh5wckTRHCUpbeof/8A6DZ6fJzeNE/3RJ+XtnyTNf7I/ujOwIcImRDPcaXU0Fe/lnAoiaf4R2n1vCHfl5Z6dCb90U/mjPknGFeBlQfcKXX7h7+Xdnd7k37qafzQqt+5GUucQ1SyQ3jACTHgrGJlQfcKXX7h+rfuzs9yY+l0f3NDPy9s4+hMqX9VNP5q9cCGwLImbaJUtdUlVRqwJbtaLrfzY8uWJcyWlKHJSoJDA0cHroRAyxvYzyw9CNRU7PUtZu/VnIKbk0gj6qfaqPI36syXZE2pf1E1y+tXDE6QACJJMwChDgkPmG98WyIc8DTtz+4dnf2z1F2axOLJp/NDTv5ZQ5EubU1ISkOcK9LFhAJaZISogKCgMCMCMYhIiZYg9yp8rh+rf6zAhkTSBQUSAxbUvlDxyhWdvUm9yf7oz4KAFUv2keUdVssEyUlM1UsAFqBblLhxeGTjWDkiLlhaUdH6mh7F3ol2qbzaBMDJvKvBLZDUkfjF64jN+Tkj0olv0RoHLVTj7Y0Zv1Vdw98LnozDiKcYTsgc5RpY9GqS17DjdVAbukn5Vf7mZ/TBhymJeyp4TE+SoD90x8qtqHmZn9MXh8Jsw6/QfmSbRS9kstP+TD7QqYqoKdhmZ6OlJWDKVJnkIu4FLesc6lxpAuMIsjbQe8fk/U8gQseESVYaYe2AaCMCHNBTsvdxE2xGYh+dN4itOiaJbCoGOLmBco64idxdOrGbaXLQRaan2w4yujeydsOESCquseLQxJdLVxfhh3RBhbbkJe1y+AUf5SPMwR7/AMsmzgukgTE5VDgimUVPJ7IHpKyW6KD3kiLrfl/RSLtL6Kvx0aKN945dZ/5S8jPTDloahxYeNfIw6ahi2nn/AJhqknjDDqDGhCWhzQhEQDRDMGMEu8FJc/7Uj+iB1Qxgh2naxNs0xQQpCr8oLfMhJAIpQMM4jMleLzRf5uScmQ+crYH80a6dJMaBeGivuwBcmiT6QvTmz/UmD/mx+t4wqpuYMVxWCvKRJAkIUxPyoetKhXmc4GN1COdmKUuWlPNrS61hLqWCAA+PHSCzlHA9HQGLCaMKYBUDNjsEtUmUSgXiUEly6nmlBGLeqItH4R1B/o2fPQ79nzEJs6SVo+Tlz0KF4PeURdYYqBahEDCcBBDLscozFJ5tLelJlj1nCFAqbHgA/XFJaACSoABJNAHYcMSfGCjXh7XfXX+RpTnr8NHkHI4GEILcIkUhqE0Z0kfHw0E1Bnyf2y/LmylEulV/FnBDZcU+MUW9OzeZnKYFMqY5TTqJHf4GOTYO0OYmpmVKHZYGaT/h+zjGgbcsItMq4GN4XkqOA0I1cFm4xR6M5tR+71837ZGac24DOcXpx9xi52VunNnoC3SgKqm85KhqAMngjsiebs0pCOg67i1AC8Mb38RIu+WUd1l2eP8Alm3QWSHCaAVZkgt7oLYKmNlZ5dP9lPuns9dnnzRNuh0i6QaKqTQ9mBrE+/k8cwkOKzBhqAT5tFrN2eUdKXeKs0qUpQmDQ3ia6HXhA7vrOlTZUtaGpMYnAhwaHRiMDmDAWruIpy7StGTBMpoHxJfsw8T5Qkw5ZDzOfshbr11LJGfxhDVNQd5+NIudpEZEIpOTdcTKY63R5e+I1lzBIMXXygj3jnIMpakrSecVKKGUCTdQynGTGlYp9lSQubLQoOkrTeGoeLdeyZZCzc9Vc8PXBKAUjHIwG9TJXy5lfl/3+B/Ju5tK3q8ov95JHjB9zCePj74z/k3Pzhf7o+adY0Hn0fXH3hFJ7nPxl+1YN8pH+3RT9KK6UV5xSbHS8qUk4dD/ANq/ZF1ykL+boDYzRj1K4wG2W2TQgJE5KUpNA4DVPDB1E45wYq8R9CDnRSXzLqWBzoIq9pkl+HN41r3wPTVOp3e8agBvAUbqidFpmBiJyHvJIY5pF1JwyFIitN4TCVEXnqUsAD2AN2CLWNlKGV69Bgz8YcFPQu2XAwpOL0ViDr3eceTXDHMa9XH44RB4iTn2Hq1+OEaDuXNHoybxDpJQSo5CqQHyukUgAAwIz1/pPGDLk9m9GajIEFOtXB7iB4RWWxjxyvSv8i4vIM0pF1SJwN4Yi+mvU6kO/FLwi78tdxM0BFy8OcF9jeZgXCmqMSTHZtGSVo6PrpIUj7Qy6jVJ4ExTS9oBc2WtAWpd1aVouklFQaAkCjFNDnm8URyoq6ui4sNsCwQWC0teDuK4FOqTiD2YgxR74bHUuUpUtgL19aSMwCCpPFjUZtrjabOsagtU1QYq6ISWcByXN2gJKlFqsGq7w/b0+5ImqIwlqHW9G8REWj0DCWWosvQy9WTOdOqPNnk+WvCFWWpnn/aIS8ScBTAZD3/Dw09AIzmtBkBWnb8Ex5aRiSSHYCgJHsjylCtbxzVp1e+FF2rsaUoaHs9vjEIdGxA9ol5VJ6mSTBNQS5ozKphDZugeyBSzpKDeExKVMWrViG0zBMSKt02ny6XqBXUXTloAIDVzNVpOcrplpycH5wofsj2VTGjdkZ3yelrSsBj8kWbA1Th4RoN4/V8YpPc5mO4oMcpAAsqcfzo8lQAMT25OPKNA5Rx81SxwmjtoqM+CGY+6Lw2N2B4fmKQxrTriZiWYg5NV/jqhiQ+Ypg8OIY1A7D8CLG4fdalOo/FDCplg+449hwMIAmlc86DwiVMsthTh0k+8QAMbe17Xz+1of1oINyrYEWhsBMBS3EVHbRuOMUCD4dv4t9oRJKUUkLTQpIIOTio6sMH6tIDVxVWCnBx+Zq/lHHZ0F1EYsWB4rUW7aR0yZoUAQcQD2Go84RRSnEgdZA84UcDbQbLWFgEEhjUYEN9E9uUVG+s4psxANVqSkNjmS3dFoky1kKdN79VYfqoawK7+20FaZQNEpvK61YP2DxgxWo/DxzVUvMF8Gbsz7hmeMM5uuZOg9piRcy7Um6+ZLP24nqAAhiOmAQRdOB9VPZmYady4jd5yHx748tDY04Y+HvhG0PdDhJWUld03Xqo0BOjnE8IhYiu6H446Q2Yp26mw+NYlKiccPDhTrhkwCrF4JGEHJ0PnK8X5ot3pg7FmVqfvGAfk6UfSVCrc0aadJMH1wQme5xcZxWC/KEsmzBwx5wUoaMpsO+AK8zUB64PuUVPyCCSaTPMKx6oApIemphkNjbguF9xwVwD9vvhSnVJHh5x5KU4EnuGPfHkEVcE9rewxY2j5a6fSzbNoeB2n7B8wYZcGgHWrCESga9wJ90Ah1XFZvTUK9qS3fHPP2jKS4XMl9V4P74AJ1oWo9JSj1kwV7nbNsvoVptdpkLnGTMQlMtKyh7zacTGh0FFXbONL2k3pGP3Ycq5Rtmy5UtKlqmqShIITKJqABiph4xV2jlclkhFnsS1qNEhSgCSdEoCi/CIZmxbPZrTbZsiUAZFkROlJX0xLWq89FO/qjHBzFnJ6dqsNoKUiauwTJilJSB0wlDHsvFutopkguTfn0uc5yk3uVFr3w2qZ0qQmySrNMm0lBcupf9ZZbrpFBvAi3c0u12ifdKpxlJSCypikdFRTdAASLpD8Ist2dqWydN2Z6QkmQLQrm5qqqmKIU7kkkthgMOEdvK7ZeelSbVJXflSlLkrSKBCgpiWyJUCk/wAJzhispJWQM0rNpszuUhU1aUOSVECpJPX3QfSpIQlKUJokMPk9OswN7m2EFS5qhRPRThicaFnYaawVT5YSRRiB9IEV4MSCIriJ3llXI6/s2naDm936Fzu9YpaAZ1qBut8mFEgqPBCakcTTrir21a1TZhPSKB+bS1wJTkyQ7U7THLOJWbyukczffsOcMmDg2TfAjP1N8KXfc29fT6Hs6Ds1+NYjmpIyI7DTOJpcpRAISo8LpIMLNsUxIKlImJ4qSQO8wRjki75OB84XX9Ee2qcIP3P63dGfcnKfnKv3R80xod8awue5xsZxWC/KIT6OnMc4mtNFacYAUgEUBf49sH3KKD6OGIbnBTUsrwgBDgYt7YvDY24HhLzJQkprgcK/DxPZrSEFyhEx8UrS4bre8OyOZBY1DwqsS4Y6QTa1fRhPbbNYpkoc0qRKnFiXUphqA9HydvfFFaJN0sojgXCgQMwElj2xDJQXFQkaqLYafhDCNXD6Gp+NYCQmFNw0zN/UAFYwbbl7d9F2dalpWgTRPlFKCQ6h0Qpgano3g+UUC93Zo0UH+jx64WzbDJmISpJqoJrxIHtjdKcWrXOB7pVT1Vgstm89gTa7WSqYuRa5CUrVKHSlqAIIZTZNhgdY5lb5LVaZC7JZpkyTZ5JkoQsEqWgs5UUggHopbHDjB3/peybI970VBH11If2mILTyh7Mk0TM5zhLlqPZUAN2xnU7/AAxbE26gZtCftFZkzZNjTZpNkCpkqWwuopVRvF1Fnowga9PtKkTZZnKEucsrmoT6q1EuSR1tQaCDvbPKgi0S5lns9knLVNSpAch6hqJTeJgT2ZsK32lIXJs/QJIC1EJTRwaqIwIOWUNi5W7ySGU1S/c2deyLRKlykywVDVxiTmRVJHcYsJaknBi/1T5pgJt65suYuWtXSQopVdIIcUoRQjjHVusSZ9XPQUeOUVnR0cmzo0cdFyjTitNEHFi2UVGqpaU5lawjuGOWkEWwk2WyrUo2tK7wYpamoNAXI7MTAgZdcH+M4UCmRfvHxwjM1c6FWi6is5adPxhNvBvfMv3ZC082w6QSQp8wb3fQQM2q0LWSVkqJzUSfMmPFIOJKeuv+PGI5qdDljBSSDSowpq0UEPJ1/uFD9kcThVPCNEaM85NwPSVa82f6kwf83w8TC57nHx3FYNcowHo6T+0DdyngBkSipQCQpR4AmD3lG/MJc/pE9QorzgDlTlJoFKAOIBIB7ovDY34K/ZaF3s/dS0rxQJYxdZY14B1eUWVr3KUmX0CZswtUkISkZmpcmnjAvInEKClKJAIPSJILZGucdtv3gtE1wqYpvqp6I7ktEaYyUK7krSVvoOtOw1yz05klB0K3PcATFBvDtAyEgoZRUWKlAjJ6Z98d6RThnxPvik3wfm5eXSoOzH8c4ZTV5pMGIlOFGUr6lVN2/PP07rfVAEFQ3Cmldh560qXLtRAUUgvLdHOAdIkFwCHbKAM4GNy2PtcX7HZpiRWyS50onG+gXS38Bcdsaary2yr5nA7Wc/ik35mc2ndeSmyTJoK+cTbvRwp6XHZ2AqrN4JNt7JsyJNus6bB0bNLARaEh1mZdCiVqJDMCksHoTSODattlpsE8FSSobUUu6FC8UhTuA7tTHCOveXeqxCXbZki0LnTLYhKBKKClMno3SpRNHbTQDCsUbk2t/wAsV0LrYezwqbsueJktHN2UpEtRZayU4pAxFXJgU3SnLNm2ukqVdTIUUgksHVMqBgOyILJve0+wzZNnmTDZbOZRT9ZRDOCkKp1xUbJ2naJQtUuWhA9JSUTL9LodRZLkV6RFXgqDSd+nqFJydooo4td1T8uPsq9kPkbsTizlCXwq/lFnsrYQkqv3yogEEMzPnF51IZWrmvC4WsqkZNWSYUbOkSZvQUrmZn0Vn1F9YxSe1o7ts7prlIvoVfASL4FSktUgCpS/aIoV6O4yLEVbKJZVvmBQIWu+AEguQoNQAHhphGGzO1KFTNeMtPkyBaTic6v7YjJ/zE9rWVLN8JCq3roAc6sKP1RAw0pXriyHa2CTk7UfSCG/RKc/xJx10jQb41jO+Tf/AHKv3avNMaI3VCp7nCx3FBjf9IFmDkkc4lzi1FYd8Z+kdfsjQeUUH0ZLYCYH0wVGfCucXhsb8Dw/MkMpQx0B7Dh/iJrHZFzJiJcsOonXvPAAVjmSnJqmLeybWEhN2SxmKa/MI7bqQfo6qzgs1zcku7uT7R2cLNWYUzFlxLliqQl/XXrwTmccGgP3tkzFoQpiolRLiuTecXVstipswzJhdSi5anYOrAREZuZo3g0Wg3F3FOi5U3Gb1e7/AKAf0RWYA4Rb7I2ZNtU+RKmTphciWFEklCdEvgAMolRtozlplSpF9a1XUgkdInDv647tobL2lYgm1KkpkhCgyklK7ijQXgSWxxjU5z20TOLOnh4p2k35BpYOSSyJqszJnWpvBIEWid1tmWaq0SENnMKR2uskwCbUstvXs0W6bb5ygq6eZBKQEqVdclJA0LNgYm2JutYFJsInptEydbEKN4TGSgpDnjprCXGTV5SfkZbrkgwtO+myZGE+WpspSVL8hdjJ9rbVlLnTZkpCjLVMUpJIZgSSHxbGCbcdUlKLaj0aQtdlRMmJmrTeUspUoAKBoAAkYRFyc7TTap9pstoSkptYK7qRdSFpYkJAwcAfdi0YRjd2bt1Lwqyj8PMGLZarRJu3papV9N5N4EXkn6QByi+2LaVzJImKU61FQOA7dOHXFRv9tb0i3T5g9RKubQNEo6PiQT2xYbsn5BJYFirHrg1YrInbU6GAq1J1WpSurMskKY4OMw8KmUSoJAcksAdT5Q1RyyhxmElySS2Z4MPBozHaPJbOjcIjmFnGsOI4dsR3u+CRhPyclrQoayi75dJOEaB2n47Izzk5WfSFjWWTjopMaHzh+qPvD3Qme5wsdxWDPKMPm6A7fKDH7KtIz9Cq/hB9ykFrOgU/OBtRRT+yABCmLwyGxvwPC+44juMeKw2GevhDTDrvnBNo4K4Rw7w2spkEPj0U8L2PtjsEDu9dpdaUD6Ic9Z/AeMMpRzTRnxlTJRk+ey8xu5Ae32X9+iCffratnlItllkzJk6daLTfmOLqJV1uiPrFwA4p3QH7DmzpM+VPlSytUtYUkFJYkas1O2Ou12G0z567QpKULWsrNQACS9BU0jTNLNds87GlUku7FvyNUtlllqs03Z4mgzE2FPyIT6pSCb97ibou8Hziq2JvBLkStly5ipaZc2zrvrLPLNLtXdIxHdpAcdiWmfMMyZPWtagylJvKJGDEhqUAbCOmwbkpWLwvrDsC6UhxqMYR3ErNmlYOs9WrfVnPuztWRZv9QQuYVCbJVKlKSCrnC6mLjAEEFzFXuhtn0W1SrQJZmc2/QBZ3SU4sWx0gmm7tS5RSnmklShQVUcWzzeLHYuzUr5wENcGAZOtD3RZ1o66bjo+zXlzSkrdNQCm2CfNWtYlKF5SlVoA5JzbWCLYllVLlBCh0nOFcTwgstdhlIl0QLxu4uc5YLffMdk6WlE66nopHYMT8d0KnWclaxpw9GFGWaN29dwUUkhw1RiI7rLstU0BQupT2nAgHzeI7Utp03ohTkgZs5xDZ8YsdmbQEuUElCiQ5ySA5fEkaCFs3TlLLeJFL2ELxSpZokK6I4tnlTHjEW1NnIlyrwcqvgOTkQT7AHiQ7YJXeSEvdCWqrMn6I4tjHLte0TWCFgpdlMU3eo4k5wVcWs7krstOThPzlZ/ZqbjVMaBd/U/mEAXJsR6QsZ83/APSYPCo/VHj/AGwuRy8bxWDvKQoejjE/KJbTBUZ4PhzGhcpC2syXo8wY1qysu+AjY0lKiu8l2Q44Fx7Hi8PhNeEllpXOYHvjok2VaqhCjXIdvVpF1s5QDEgNdSTQAZV84VVrQhYdYoAMXySPZBuaO3d7JFFMllJIViKEOI7rBsVM1phKQTQskXiAUpd88ceAiCdMXzi1IwU4dsQccY7LDtQy5fNsklziSca4JB84jvyGTbcVbcmtGyUIlKV0iQlwSaP1CKlKALhCgSTVLHo1YVzfGkWs21Tpou3FEKDUQ2WDqOgfsjm/0xQAKkpSCSnpqq4ByDaeUBAg2l3mXc20gocqCQFEVYOym7ix8IrNl7QQhADFIAUWAKje6LVbS9TCIpUmVdUTNTeBLJQlypji7FnxiezWZKqczOmKLkByEsDjXJiO+AUyxSaf9epBtq185MSpPQuhqkDMqDMXzMR7PmrTeCOkVMCAgq16sXMd3MLQxuSZYKgOkQSHpWmGcMnWvoK+XF5V43ZaAHLMASHLMkdTwSyksuVLQZNkT1gqKVMkOXUEsKHAV+gO6IV2diAuYgOWP0mDO/SOoAwiQWmW7mXMmBqX1Ea1qW0oNOMMO0gkky5cmX0gofSIZqdVPExCLNskPTJl1AM5dUgXUsDg+Q4tHTKsjAkWZODvMWMnwxf1TSK607XmrDKmrIcFkgJFMO545VzXxBP2lE+6JYOST3/PQs5lrXLQVJmywVB7qRUBTEiuDP4RU2u0KWQVqKyzOYUTyHZg+gERTVviSeJiyRZQUQl5Oz85WQABzan+8luMHosMv6o8YAOTYfOFnSWW7VJjQOa4+f8AdC5nHxnFYNcpSXsqTWkweShGeJtfM4KV0qUo/nGhcqC2sqa/pE0ywVGYW2WpQSEsceyhHn7IZTV0aMNK1I6LTtUJJF0lqVL6anqyiBe1JlWZI+NG+OqIpljvElSgHyz+KRNLsMsHpFR0o345wzuodeTehY7uKVNUXSFlzRRYUY1f4rF/MnFLErkSa/RS6g4KevB+2BiSqWkMlPefdEhtTYBI6h73ijV2Nyt7su5tuvBudmqZVLtAzMVABtVCGzbTKAIEkOQ16YtyCcw+YilVbCRie3CI0pWalQH2R74GUtlWyLuVtRQvMpKbwA6KXYB9afSMc9o2tgVzJhAp6wSwNMsBhFYqyCoK1Kds/d1xIJCQ5YdubH4MSyLKPOw5e1JeIF7qBUT39kKbfMI6KDwwT5ZQgmJwFY9iamJZB1fMchZIcjpZ1do9CzCHISTdJo+LZO1HhArURC6FBMKlOGNYaV5UEIJjfHx3wSXHNCTAwrDVK/CI1CJYDYT8mv8AulvX5JXUapg8XtaWklN/CmBygF5OE/OVP/xHgzlMWe0N2FqmzFXl9JajhqSdITO1zh45J1NWEG3NjSp6BLmBVy+FOggVAYXuGVIqk8n9jeqFkNjzhqY9HoqptbGdVJJaMcdwLF9SYP8AyKhPyBsZduc0LTNMsISPQO0kXVWp4mLP3AspSwSskVDrauhYYdkMs+4lkc3kL0AKj3gjF+Eej0WzMPbVPEyQbh2PAomf9h9kO/ISxj6Mxh+0Mej0V7SRFWqeJnvyDslejM/7DHjuPY3a4vB/zhj0eiZ2Tt6niYqtxbJklY6ln2iGp3Gso+jMOX5w18I9HoOZlu2qeJjzuRZW9WZ98witxbJ9WZ/2GPR6JmZO2qeJjTuJZdJlP2hr108odM3GshGEwN+0PdWPR6BmZO1qeJkaNxrK6gUTaMx5zGmIbiWrpDhuNZRQCaDqJlfENHo9BzsHa1PEzt2Nu9KkLUpF92u9JZU4JfMNllxi25oaDuj0eiMROpJvU//Z',
    },
    {
      id: '2',
      title: 'test2',
      clubName: 'test',
      startDate: '2021-10-10',
      location: 'test',
      status: 'cancelled',
      poster:
        'data:image/jpeg;base64,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',
    },
    {
      id: '5',
      title: '제 1회 스페이스 클럽 해커톤',
      clubName: '스페이스 클럽',
      startDate: '2021-09-18',
      location: '서울시 강남구',
      status: 'pending',
      poster: 'https://spaceclub.storage.googleapis.com/club/1/club.png',
    },
    {
      id: '3',
      title: '제 2회 스페이스 클럽 해커톤',
      clubName: '스페이스 클럽',
      startDate: '2021-09-18',
      location: '서울시 강남구',
      status: 'cancelled',
      poster: 'https://spaceclub.storage.googleapis.com/club/1/club.png',
    },
    {
      id: '4',
      title: '제 3회 스페이스 클럽 해커톤',
      clubName: '스페이스 클럽',
      startDate: '2021-09-18',
      location: '서울시 강남구',
      status: 'cancelRequested',
      poster: 'https://spaceclub.storage.googleapis.com/club/1/club.png',
    },
  ],
  pageData: {
    first: true,
    last: true,
    pageNumber: 1,
    size: 10,
    totalPages: 30,
    totalElements: 2,
  },
};

const eventHandlers = [
  http.get(`${END_POINTS.GET_MY_EVENT}?page=$1size=10&sort=id,startDate`, async () => {
    return HttpResponse.json(myEvent, { status: 201 });
  }),
];

export default eventHandlers;
