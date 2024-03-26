"use client";
import { useState, useRef, useEffect } from "react";
import { User } from "@/app/dashboard/page";

interface ListItemProps {
  user: User;
  isSelected: boolean;
  onSelect: (user: User) => void;
}

const ListItem = ({ user, onSelect }: ListItemProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const listItemRef = useRef<HTMLDivElement>(null);

  const handleSelect = () => {
    setIsSelected(!isSelected);
    onSelect(user); // Pass the selected user to the parent component
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        listItemRef.current &&
        !listItemRef.current.contains(event.target as Node)
      ) {
        setIsSelected(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={listItemRef}
      className={`${
        isSelected ? " border-2 border-blue-500" : "transparent"
      } bg-white rounded flex justify-between items-center mb-[16px] h-[70px] top-[110px] left-[20px] rounded-[6px] justify-between py-[10px] pl-[10px] pr-[26px] cursor-pointer`}
      onClick={handleSelect}
    >
      <div className="flex justify-start items-center gap-[18px]">
        <div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <circle cx="25" cy="25" r="25" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_231_105" transform="scale(0.005)" />
              </pattern>
              <image
                id="image0_231_105"
                width="200"
                height="200"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAAMPmlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnluSkEBoAQSkhN4EASkBpITQAkgvgo2QBAglxkAQsaOLCq5dRMCGrooodkDsiJ1FsPdFEQVlXSzYlTcpoOu+8r3zfXPvf/85858z584tA4DaKY5IlI2qA5AjzBPHBPvTxycl00k9AAE4wODRksPNFTGjosIBtKHz3+3dTegH7Zq9VOuf/f/VNHj8XC4ASBTEqbxcbg7EhwDAq7gicR4ARClvNj1PJMWwAS0xTBDixVKcLsdVUpwqx/tkPnExLIhbAFBS4XDE6QCotkOens9Nhxqq/RA7CnkCIQBqdIh9cnKm8iBOgdga+oggluozUn/QSf+bZuqwJoeTPozlc5GZUoAgV5TNmfF/luN/W062ZCiGJWwqGeKQGOmcYd1uZ00Nk2IViPuEqRGREGtC/EHAk/lDjFIyJCHxcn/UgJvLgjUDOhA78jgBYRAbQBwkzI4IV/CpaYIgNsRwhaAFgjx2HMS6EC/m5wbGKnw2i6fGKGKh9WliFlPBX+CIZXGlsR5KsuKZCv3XGXy2Qh9TLcyIS4SYArF5viAhAmJViB1ys2LDFD5jCzNYEUM+YkmMNH9ziGP4wmB/uT6WnyYOilH4l+TkDs0X25whYEco8IG8jLgQeX2wFi5Hlj+cC9bOFzLjh3T4uePDh+bC4wcEyueO9fCF8bEKnQ+iPP8Y+VicIsqOUvjjpvzsYClvCrFLbn6sYiyekAcXpFwfTxPlRcXJ88QLMzmhUfJ88BUgHLBAAKADCWypYCrIBIK2voY+eCXvCQIcIAbpgA/sFczQiERZjxAeY0Eh+BMiPsgdHucv6+WDfMh/HWblR3uQJuvNl43IAk8hzgFhIBteS2SjhMPREsATyAj+EZ0DGxfmmw2btP/f80Psd4YJmXAFIxmKSFcb8iQGEgOIIcQgog2uj/vgXng4PPrB5owzcI+heXz3JzwldBAeE24QOgl3pgiKxD9lOQ50Qv0gRS1Sf6wFbgk1XXF/3BuqQ2VcB9cH9rgLjMPEfWFkV8iyFHlLq0L/SftvM/jhbij8yI5klDyC7Ee2/nmkqq2q67CKtNY/1keea+pwvVnDPT/HZ/1QfR48h/3siS3GDmLnsdPYRewY1gDo2EmsEWvFjkvx8Op6IltdQ9FiZPlkQR3BP+IN3VlpJXMdax17Hb/I+/L4BdJ3NGBNFc0QC9Iz8uhM+EXg09lCrsMourOjswsA0u+L/PX1Jlr23UB0Wr9zC/4AwPvk4ODg0e9c6EkA9rvDx//Id86aAT8dygBcOMKViPPlHC49EOBbQg0+aXrACJgBazgfZ+AGvIAfCAShIBLEgSQwGWafAde5GEwHs8B8UAxKwQqwFlSATWAr2An2gAOgARwDp8E5cBm0gxvgHlw93eAF6AfvwGcEQUgIFaEheogxYoHYIc4IA/FBApFwJAZJQlKQdESISJBZyAKkFFmFVCBbkBpkP3IEOY1cRDqQO8gjpBd5jXxCMVQF1UINUUt0NMpAmWgYGodOQtPRaWghuhBdhpaj1ehutB49jV5Gb6Cd6At0AAOYMqaDmWD2GANjYZFYMpaGibE5WAlWhlVjdVgTvM/XsE6sD/uIE3EaTsft4QoOweNxLj4Nn4MvxSvwnXg93oJfwx/h/fg3ApVgQLAjeBLYhPGEdMJ0QjGhjLCdcJhwFj5L3YR3RCJRh2hFdIfPYhIxkziTuJS4gbiXeIrYQewiDpBIJD2SHcmbFEnikPJIxaT1pN2kk6SrpG7SByVlJWMlZ6UgpWQloVKRUpnSLqUTSleVnil9JquTLcie5EgyjzyDvJy8jdxEvkLuJn+maFCsKN6UOEomZT6lnFJHOUu5T3mjrKxsquyhHK0sUJ6nXK68T/mC8iPljyqaKrYqLJWJKhKVZSo7VE6p3FF5Q6VSLal+1GRqHnUZtYZ6hvqQ+kGVpuqgylblqc5VrVStV72q+lKNrGahxlSbrFaoVqZ2UO2KWp86Wd1SnaXOUZ+jXql+RP2W+oAGTcNJI1IjR2Opxi6Nixo9miRNS81ATZ7mQs2tmmc0u2gYzYzGonFpC2jbaGdp3VpELSsttlamVqnWHq02rX5tTW0X7QTtAu1K7ePanTqYjqUOWydbZ7nOAZ2bOp9GGI5gjuCPWDKibsTVEe91R+r66fJ1S3T36t7Q/aRH1wvUy9Jbqdeg90Af17fVj9afrr9R/6x+30itkV4juSNLRh4YedcANbA1iDGYabDVoNVgwNDIMNhQZLje8Ixhn5GOkZ9RptEaoxNGvcY0Yx9jgfEa45PGz+nadCY9m15Ob6H3mxiYhJhITLaYtJl8NrUyjTctMt1r+sCMYsYwSzNbY9Zs1m9ubD7OfJZ5rfldC7IFwyLDYp3FeYv3llaWiZaLLBsse6x0rdhWhVa1Vvetqda+1tOsq62v2xBtGDZZNhts2m1RW1fbDNtK2yt2qJ2bncBug13HKMIoj1HCUdWjbtmr2DPt8+1r7R856DiEOxQ5NDi8HG0+Onn0ytHnR39zdHXMdtzmeM9J0ynUqcipyem1s60z17nS+foY6pigMXPHNI555WLnwnfZ6HLbleY6znWRa7PrVzd3N7FbnVuvu7l7inuV+y2GFiOKsZRxwYPg4e8x1+OYx0dPN888zwOef3nZe2V57fLqGWs1lj9229gub1NvjvcW704fuk+Kz2afTl8TX45vte9jPzM/nt92v2dMG2Ymczfzpb+jv9j/sP97lidrNutUABYQHFAS0BaoGRgfWBH4MMg0KD2oNqg/2DV4ZvCpEEJIWMjKkFtsQzaXXcPuD3UPnR3aEqYSFhtWEfY43DZcHN40Dh0XOm71uPsRFhHCiIZIEMmOXB35IMoqalrU0WhidFR0ZfTTGKeYWTHnY2mxU2J3xb6L849bHncv3jpeEt+coJYwMaEm4X1iQOKqxM7xo8fPHn85ST9JkNSYTEpOSN6ePDAhcMLaCd0TXScWT7w5yWpSwaSLk/UnZ08+PkVtCmfKwRRCSmLKrpQvnEhONWcglZ1aldrPZXHXcV/w/HhreL18b/4q/rM077RVaT3p3umr03szfDPKMvoELEGF4FVmSOamzPdZkVk7sgazE7P35ijlpOQcEWoKs4QtU42mFkztENmJikWd0zynrZ3WLw4Tb89FciflNuZpwR/5Vom15BfJo3yf/Mr8D9MTph8s0CgQFrTOsJ2xZMazwqDC32biM7kzm2eZzJo/69Fs5uwtc5A5qXOa55rNXTi3e17wvJ3zKfOz5v9e5Fi0qujtgsQFTQsNF85b2PVL8C+1xarF4uJbi7wWbVqMLxYsblsyZsn6Jd9KeCWXSh1Ly0q/LOUuvfSr06/lvw4uS1vWttxt+cYVxBXCFTdX+q7cuUpjVeGqrtXjVtevoa8pWfN27ZS1F8tcyjato6yTrOssDy9vXG++fsX6LxUZFTcq/Sv3VhlULal6v4G34epGv411mww3lW76tFmw+faW4C311ZbVZVuJW/O3Pt2WsO38b4zfarbrby/d/nWHcEfnzpidLTXuNTW7DHYtr0VrJbW9uyfubt8TsKexzr5uy16dvaX7wD7Jvuf7U/bfPBB2oPkg42DdIYtDVYdph0vqkfoZ9f0NGQ2djUmNHUdCjzQ3eTUdPupwdMcxk2OVx7WPLz9BObHwxODJwpMDp0Sn+k6nn+5qntJ878z4M9dbolvazoadvXAu6NyZ88zzJy94Xzh20fPikUuMSw2X3S7Xt7q2Hv7d9ffDbW5t9VfcrzS2e7Q3dYztOHHV9+rpawHXzl1nX798I+JGx834m7dvTbzVeZt3u+dO9p1Xd/Pvfr437z7hfskD9QdlDw0eVv9h88feTrfO448CHrU+jn18r4vb9eJJ7pMv3QufUp+WPTN+VtPj3HOsN6i3/fmE590vRC8+9xX/qfFn1Uvrl4f+8vurtX98f/cr8avB10vf6L3Z8dblbfNA1MDDdznvPr8v+aD3YedHxsfznxI/Pfs8/QvpS/lXm69N38K+3R/MGRwUccQc2a8ABhualgbA6x0AUJMAoMH9GWWCfP8nM0S+Z5Uh8J+wfI8oMzcA6uD/e3Qf/Lu5BcC+bXD7BfXVJgIQRQUgzgOgY8YMt6G9mmxfKTUi3AdsDvyampMK/o3J95w/5P3zGUhVXcDP538BZ1d8MCclP9MAAAA4ZVhJZk1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAAKgAgAEAAAAAQAAAMigAwAEAAAAAQAAAMgAAAAAuJMfrwAAGIlJREFUeAHt3QuT27TXx3FKufSyZcrA8P7fGAxvgGnplZYCzyf5tefvZzfOJtk4trzSdDTHsiydy1dHtpNNH/z62+9f9dI9cG4PfH3uAft43QMbD3SwOgeTeKCDNYlb+6AdrM7AJB7oYE3i1j5oB6szMIkHOliTuLUP2sHqDEzigQ7WJG7tg3awOgOTeKCDNYlb+6AdrM7AJB7oYE3i1j5oB6szMIkHOliTuLUP2sHqDEzigQ7WJG7tg3awOgOTeKCDNYlb+6AdrM7AJB7oYE3i1j5oB6szMIkHOliTuLUP2sHqDEzigQ7WJG7tg3awOgOTeKCDNYlb+6AdrM7AJB7oYE3i1j5oB6szMIkHOliTuLUP2sHqDEzigQ7WJG7tg3awOgOTeKCDNYlb+6AdrM7AJB7oYE3i1j5oB6szMIkHOliTuLUP2sHqDEzigQ7WJG7tg3awOgOTeKCDNYlb+6AdrM7AJB7oYE3i1j5oB6szMIkHOliTuLUP+s19c8GDBw+Y/N9//8XwHKoVjcq///6rLrd8/fXutff333+7RLftpZ+rHNa1Q+Gff/4xbPplzMw1Nv7w2hblewcWbgoFAUt0NSbAOfXw4UOCFjUgdsb1u+++K/4ipP706VP6u5ZQNSFyJh32ibyy+t6BVXHFQSINIOXbb7+FF4wUcJAVnT9+/Lgz5C5x+fbSr4EYQYtxjFzFIGQj6JOpc4qss7Jz8BU03juwEFBRLywEGEyQssEhSSE4hIV6Z5idchVclG+++Uad0Z4+fRpoHOqQmhC8MlSQzdnIO6douvHegSXAFWxBVWCkfvXqlVPbhk0V+IRW550BRlJYQaQSWf369WuXyFv2yhQyhvTJvOm5c8w1Nd5HsIKLYMtG79+/f/v27YcPHwJThdZZcupqHApOKSip2lmHf/31F4DAaswkM4eKTJbEtr3uwZDd4bCrke8dWOIqeYi6zU692fY+fkTYtXujyislXAt5kAoluCGo9VE7pRjTRDgja5e99IGaOkOl/dqwqzm8d2BJG+/evbPxvXnzBls4+P777x8/fgyyinRwSS217Az2kA8X6oYkQtCps66NDLLsnhk2Y9aMO6douvHBr7/93rQByKhdLDHLIVzEUrB1SESho7x48WIWe0396NGjZ8+eXV1dyV50iHp0pp6iheZRfgjfLNrefdLmMxZ0EgYAEXiEIBPYgxxGFlSHil3v7i47bQQw0UqapExyJM4UWVM7KwxbCq8gkzUPlhgkHuqKBzlFwATSHTqqZAgdkhtOg+MuV5mXAsimDMiGJCVLRfmofZeJFnJt82AJmGDwplAlQrKUInii6IkvD33CloeyRPTy3qcAPYM1GV44827i+fPnGtMeE8JWOLu8nueasXmwQtXm3mT78slhwApV2Xo0eujTns7n8t1R4wAlitGBjKFsgpB6si3OMgFtBGugg3WUeyfpvIXq83vwoKPljz/+wFae+0KVmDkUs0mUuG3QKAYXuqUvgAgSKoGGisPqdtt4Sz8/j5fP6JVQlXxg9csEdhnFOwWziJnGJImK6BlnP2ooSqbQp0oUduiVB+jDvW5HjbzAzs2DxacJg9gQZKk/t0WcUJVGucopshuvufCKklGJzrUecC+PWgbU8yYCWE4l0S4Ql8NVWgFY9pHNZ8Di4V745cuXovL48eaT4O2ek6WPsI1Pti27P/s73GV36SkTfUlGG5X882IVUtCXZVGV/HqXKRZy7QrA2tyXCIwXCmKTzLQQ5x6iRjKZVZHbeYZg65ALF95nDWBxsXh4AMyGIjCChLaFuz7qBSy1RJunjSbUvlXJOfeFW5U7pEMCk4wlNnhyHyMBHHLtEvpQWGFFMhYTyExYgm530aF5A4Qh+whBhBKShsCicIooYkthyAp2w+bBEhXparjQQ9hdVtuFr2VCSMoKMbsVcmEdzj5d82B5kgKWDwSTpciEvA06u7OmGNAyqGEDlnrYWGfbEpoHK7fqMpZ4KLYSdUNbCW0LI8LGhkFLWzANtW0GrLBij/DRB5n3MWQT2bxlf/+eLEs5ldgMLVy4HLvoT8h3yJjjRe7C1b5VvWbAYglowo3aIciU7H1pSWN6qpsrsS5rpjnlrynczHusoBPXsyFUEfJFq1ilMUJxlsMmajorUpelojSh8x4lW8pYzOD63ILYBGHk0G27YBByNmzlcI/ZCzwV05KuOliXCxC/D6GJDClvqwUjh7QhKC2CFVcGL3ZdzrPTzNRSxgo08UPoycOgFofq8BR5Gnedf9RaA6V2tZx/sguO2NI9VrY/zhEDRaIavhfNFplTF3Tg2aaK5u3qf80RzYAVvfmdkNrKdi9yMxJ19pqpyzwc5qfYctOiZWq+X6uWwIKRlz3yluSkZli+JuqQXPEYhmq/8Us4yyIKl84RYt0S1DtZh5busWLkNgr/+xjkZMuXc2FSbOnDwCyVamlRaA+seDl4ZX236PfS+ZoJgaw/FZZ/ZhDC1gwTn3vKbOIhjEzwUHLuSS49XjMZa7hfBKl1gMWKgJXIB6z+gvTS68B8IpF6NWCVE1Hltp1dHazyyUWFsBW8LjrxNJMlY8Uoskn6PdY0nj5s1MLrsO7N9GLXCp4Km3mPxdchKZtFMNGY7zM1Q80NRZmTW3WGJFFpITAtmSw5LNc1tJaauXmviAydO3R6dejCEjzQDFhZvnEZtm6u5iV4s+tQHmgGrNK4BGzZNeqwC4vyQDOBubbr9Yy1KIxuKtMMWKV63WP1jFU+WaDQHljlxCStOuzCojzQDFh9K1wUN7cq0wxYXu3klZWt0N8PhjO/rnarhQvvkHehnkLyIMI6hc6MjY051KJnOi/coqjXzAvS8jJH5/2hD9QacvQYDewq09IHYVpYx9Ltyc+V9oJsbLTltDcDVnw69CxH5wdhl+PNEzQpqmKaQ3YlXeVU6oxMHnrghOkudklLYMWn/K5wcUO//LEnnENuGBjrgDVkS2J2StkzztJONXOPxXHlWYLP1/xF4Qq+XjIGhD/EzW441mHh7c1kLEvZws36hpRfzuD6Qm3hXt6jHhMqaREcMtNNpP9Mym+E+K8F6knFIOmwZ7TlnGoGLD5N4TuuR5U/0RGGhw83v7vfbglYTGMCWcnGl2XjZ2fs+Dnblo3NbIVxOufmBqvC0Ja7b2pbdhU9wApbWhjrZksde7XfHGGZLS2BlU3BNsGV7j8I/lu2Zbr1cK0CzZal//fXkV7R5a8m4cVSeOmTzocPPmPPZsDiI4tbzdFVZnTcBaaOmReYaIopWgKL/UO2pnDHosYEVm2CFHO4KPX2K9MYWDGGuxWODmf7LWz0LNNiJv1bNLMlsPhXyQYRsBqF5hC1WcpGt1YFVs9Yh/jtxD7c7cos5XVnrDKTEKvbsrexjBUek7Qir7VObk5iDlhtWdoSWOXZ+wAWY5s2sxmwvMvxEYcVnJc63mlZxw29MKxVcaDAOq+y8mGo9+/NfSraDFjDO4xsE7mxPTBOzXXLJtic2qVwM2DRuPJT3kGv42szFYlrQn2So73fY11zzjkPZayAFcGCXsH/C7LHQfZ6bA3z9J7OCzzVTMbK3RUPBixOd8u1QIeeSyX5mMlGG6aroXyuiSYapxmwrmUsYK07YwGLjRV15pfchNAeWNxq4VrN677HYl1gGmapobxwvJoBKzzxtcK/6uGCXriXT1DPylGYGcNPGGHeS5oBy4scN1Xu330v2SbI4/7fL67Pf04BMrKz+Z5WQyubIdRWNhxt/8DLizr6Z6Mn40N7KClhXmgOmb0ZsJKleFYkyAo5hLFTYNRa7CCep5RDjF9CH4awyMJQw8jCIDSk/5gPmwErBnC6IhhIEgzvph2SxUPqylrfQNfOX0pR1XpQykBrYwXfjG3sjyl4v8ASDGA9ffoUTylbojaVw7GVtLR2VkRtQrY/Oz67lqbnsfq0BJYAbPLVl+/3iYTy008/wcjftChuv4KUPtkcj3XH5fszIfeFtj88SVfKCp5LGgMLW2KPG3U4s8oJwqPObuiUw8sjcvKM0T9g1d2VxpMHXMKFzQQg6NRNOt9xvUMwqYOadJXVvwTPHqhD7tYtDzsgqmLIgdcuuVszYPE4khTeJOcQUgKj0d5hBwGfQqh1v2TXRzeLgS3Ais4OlZi5fOX3aNgMWNwtALhhDJ64PoePHn338eNfntafPHnkrh1pPr399OmjXiP/9nhjhlPuq/z9oLybt3RMszCslhlUOeuUzYC1x+rQpsMmX21fkza04i0YOuc9lqUSM0vYY/XCT60KLLuJCKGqIbAkJ2orBRPlV/BU2DxYCUNIcqdiH8lGufAFXerJWDZBmmvBlsIWdXVoVFgDWAmGeOTBqrnAuM2SsXIT2cFaykJKPCpjiVCW/lL0u00PKdYHOPY+hujb3D3imH3NZywbn1We7W9zq7IFS3jGDF5aO4WBReE8CUbzrJOlqXqUPs0EYMwqSDmVSFj3AoMzZaz/0trpLGnRqjIWW2LO0lQ9Sp/mwXJfxWDhQZhvaF1dXf38889Wv0PJIO+EvCWCWvoc5Z3zdt4CvyGeYAGgx4ebv/zyS7R1p0VnqtK5oYUx5qLmwRIMERpGAkBokwCyuYiTFn30JIw5Yup2GtJBMZGaMtgC09TzzjX+SsDivoqcROW7NMKGLQVYSvibESz60EHJGqAYZeTXuQI/9bzNg7XNAv/7Oo1DAfNjw8+ePRNLSUsLgR8FdWpv7hm/uNeHSg69u+pg7fHYzKeSAISq9ICRmP3444+etrS7aym2sjlWz0sKgcmMESRRSiqX1OGSczWfsWAkVInWMCu4fcmPpDtl39FNmTFplQ5RFfSoIl8y2Jecaw1g8VeIgU5kUVQEz82WndFZIXQ26e2S/q256EOTKEOTgDVjBi3FJhJWAlaWfm2LouhJXhTlrdy5c59wKhP58dZhwU09CiRjSVfU62Dd6rfZOmDI3CEmeSvxEzYhBFbF0luu2bT86iskUaByp0Oaq2dUadKpZ1vBk1rVB5/dAx2s2UOwTgU6WOuM6+xWdbBmD8E6FehgrTOus1vVwZo9BOtUoIO1zrjOblXzYHkblNdXcaV3Vw41+ikHb7C8gVR7s0XwrYdhzwu7nmK+zEOB6OMTzLwg1eIUZSiZEhMurN7Zp2vmtxvGLE8wEpjUiVP6I0wZtoyNc7H2cIMnmmPL17SidhRwVvvFlJluouYzVhIABwlJSpwlPxEkBmAREi0dcvbydaaOGtJnvnNByeiMM6X6MOryGp53xuYzlhgkNokK70SQDARPAZZwJqLn9d0Jo0UTKvkoE14+xyy1a7T0udleHZoQmgfLQufoBGNID6QETxGhYfu8USlooh76lagUktQp8+p599nXAFaiVdtHAuOXNlAlK+QsT2mfkTBTRwF6WgwUe//+vRa/ZUI3Zyv1Zk8s4O4e41lGaB6s4kY8bDGbzW+7/QmbQ40BTggTv1m8nEmjQ/ShGw3h9eHDewy52VIC04z0n9E5zYPlNoU7kgN8L0WiEjC5Ku2imEAKqjJjzGrqrIRAr3758p0vz+T7rr79R20K68OiM4b58kM1AxYseKfCU57yQ2t4ApMXV0FKYJ48uRKz9PkSINGqi2YQon9q0wd3gu+4WgZv3rxRw8u7LjXCboI15oEZjDlgymbAsk1ci00ge/36NbBQZVvJxpcVf4Dti+jCikBGeYawQrGbw4t+BaJuKTeBW4QZN5RoBqxoXo4uQ2SpJCotIpRSZ5sQ6Bw9t/eHn3+tPmCV/gwHVh0uX2gGLCt1SFV5OYJThRS59sHlB4CqUZ6qhCSksi6NscLZYfvCTWsGLH7k1jHP5lTOCoCycL+XelE1mseKOnXN5IaMonkzYElI5XcudiNirdd9STm94lQtwzgtUGYUVZWwRWBa7hqZ7M7Sc2KdcrbfY505iHG9WnEv4m5dySsrLbUP8rswOGxlN4yq1MYQeWvfZit/+fKlN1seEhVCsXVmt042XDMZi+s5nR84HVLeV719+9Yj+tXVD1nTolJ9JnPXJAMHJugUW2z5888/vd/yMiJTOkXQM4RNosdZB33w62+/n3XAQwfjKRykuCZppuDQXi3xO3psEHhS8OQSLQbxsc2hUy603+4XofnDQ9sircl+LkDxfksLzyhxHedwmsO4TqMWlzhMmStzz5axZJ1Ynjwfevgl0Xdq672N+7hGsTWo80CePi6p/mlZU12IMIrVlpPae1R4WU5KYApG+uivJck7nom7tMzilnlmZapVWAZzSgqPuKVQp8Q1uZey8VV/AifmEotz2L4aObmKmXGFJJ08zSe591JnZeqj8JK6WiLwBi/N4pPZwGI5m7kplnOKVaiRoMXq5Fk1fykEZznI2bgp7t62zOK3ySdl4Na6z+/lyWnxSQOkQJabegkphFmo/KaESJ6MP7VMruuuCWYDy+vyrLDYr3aoyPYw2q7PzX8+yE1qJRluwNOm89bdu8xqvw0ZQyMYm5bkLbhksXGLgi2/4Rbn8NWGr+1/nq3FqeE4F5NnAwtJSu4J4gWZCUb5vIzXOIgXeDNFn6Iq7fG1Twgv5qxLTsQ5MVmdeTcr6ct/F80V3KVdDR1uJKgrjemQNXlJnYdzzQaWdRbjMcQpEpg6q5Ar401IxZs0DmcOyaldnm5De1YjM42BMTZCjAWcRi2coAU9an6T6REGrHxFgsx7Ouswi09me93ANbL65gPk7denHCYzEVI4TkucyHcOq0WjFt3UviQ3i+PON+nujGshZV3FCWUyq9NeLfGMmjcUgkULL4Xg8HyqHjHS0WCxKhHNJDGS9gRWZYPXwVmN2/L55kmLs9YWngivXr06Qs3e9VQP/PDDD/JW7sMq2wlQFQMLk/A5uw3i5ueAFdHMnAlxHR6oyNFbodRKA5nW3PhQCDQj0ECJfpEpYX9zylW5H1eT0/lAFXu3u3jA+z8RcfuFrRSy6HjXali4VBEasoeoBDShTGSFzOFRahwNllkVGpgmchiiPSXSGHTUuhVYadQh6+MoLXvnkz0gOtsouIP9EMKARXA35lRkghZFQAu2BLfqYxU4Giy5Sr6xo5kymmUFBCM18Nng4S7JSXbTMyDGgBijz7G69v4neABA2THUIqKIQvKQQMhhUpc+hMRRLVjJAjonCwh6Ini4AkeDhWtzYMWUefSghOKphOoKWZ0+bFBo82U1bJIcKBWXH65l73myB6zwXJtYlNsFQoGOeHl+ymoXpqurJ2RFf2f1cUmCfpQOR4OFGDOZ2GQEiQdSPm+hHyWKa2cVynkhpVsKzQKc2ghHKdo7n+YBi1wU+F+dETZAffmFEoEQOEUc0+3duze+UuF1a27IXO7aCuvhOhwdXUqYyQSyDm18OIp3Mow0lvZk2ijyVxnmQt1YlfpwLXvPkz1gV3Etz29x2qx8gjpBdGoYMqdkODAJqE+7cx+msYJ+uBpHg0UnqpgbUj63Cunozn6MGBorMUNNOdrUIeFw5XrPu3sgDi+3J0CGTSoSKdFMdLQQhBJVvg2GMP8fUb5MIeguPEqZ0fdYpgmw0CFvdt3tL1iYwCsoD7FByqFZET0+8XGPqUdp3zuf3QOylUAnd4gsBp4/f+5lWEAU6MRau7MYGIv7aMbCsisVFJtGIRj0xYsXeeJzKpmJbYSzW9gHnMUDCWVymBDbiOQRtewV4IqE/XEfBcv1G6y2YKHSfEZHqCSZRh0CFiU6WLNAMMWkiWmgCQPuocUdVbKUjVKj7CXFEJQxHUbBMoHrQYMqhWwCD4CoMlxIctbh2NC9vVEPJF0JsbgzIVGWtzwqblnYNOJB6B06u9PMUeL0NjSGMjpmvVNQNpR+AcvQip5ado7eG5vzQEJZkQ0DGhN9GLAIEsXAmIGjGcsFBlUINkHPgAYNvIFUrehgDgXCY3P09oY8IJS0TXDFNADkEAAwsCdmQ9S4x65bwHKl3dRwioF8E8NhRgxSmTh5a880/VQrHkgos8eFp2ie0MOgbuET+jG7btnCDO2tRh4DDWR045pVISgA1wdtYxP09rY8kMQhrIlvxVroAWDvAgMkklz2mDYKlovzrsIrK8PJfkax0bqnsgH6587e1xfUbrG237Yz1M5/e2bvpxbnASTRySaIMHWSljQm9NphAAZIaIEHSMYMGN0K4eliQ2d015tjf/Ybm6O3r8MDgYwtoQIee3i4BSxIGqWGMNDeO7Z1OLBbscMDYajYAkZRsaP3nl+byYOe66XEArODtdOJ96FxCBYkknHyCLnT/NF7LAPJVbmVc2WxtXOU3nhPPFB45Q5sDxX7wJLrApYbuj1D3BOfdjN5AAZgsCECY/9WOAqWUVxpCOnOWEl6Drt/76cHEvqCwSE89rhi9ObdNS5WCIaLsGegfuo+eAAJtRvuR+L/AJL9UktZxfItAAAAAElFTkSuQmCC"
              />
            </defs>
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-base font-semibold font-inter font-medium text-primary">
            {user.username} {user.surname}
          </span>
          <span className="text-xs font-medium font-inter font-medium text-secondary leading-[18px]">
            {user.email}
          </span>
        </div>
      </div>
      <div>
        <svg
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.292891 0.292891C-0.0976302 0.683422 -0.0976302 1.31658 0.292891 1.70711L7.58582 9.00002L0.292891 16.2929C-0.0976302 16.6834 -0.0976302 17.3166 0.292891 17.7071C0.683422 18.0976 1.31658 18.0976 1.70711 17.7071L9.70712 9.70712C10.0976 9.31662 10.0976 8.68342 9.70712 8.29292L1.70711 0.292891C1.31658 -0.0976302 0.683422 -0.0976302 0.292891 0.292891Z"
            fill="#4B5563"
          />
        </svg>
      </div>
    </div>
  );
};

export default ListItem;
