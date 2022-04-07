import * as React from 'react';
import { SVGProps } from 'react';

const SvgInstagram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_223_163)">
      <path
        d="M17.7 0.342773C12.9897 0.342773 12.3974 0.36447 10.5467 0.446916C8.69602 0.533702 7.43546 0.824434 6.33111 1.25402C5.17272 1.68973 4.12348 2.37318 3.25673 3.2566C2.37385 4.1238 1.69048 5.17292 1.25415 6.33099C0.824556 7.43317 0.531654 8.6959 0.447038 10.5401C0.364592 12.3951 0.342896 12.9853 0.342896 17.7021C0.342896 22.4146 0.364592 23.0047 0.447038 24.8554C0.533824 26.7039 0.824556 27.9645 1.25415 29.0688C1.69892 30.2101 2.29123 31.1777 3.25673 32.1432C4.22005 33.1087 5.18771 33.7032 6.32894 34.1458C7.43546 34.5754 8.69385 34.8683 10.5424 34.9529C12.3953 35.0354 12.9854 35.0571 17.7 35.0571C22.4147 35.0571 23.0026 35.0354 24.8555 34.9529C26.7019 34.8661 27.9668 34.5754 29.0711 34.1458C30.2288 33.7099 31.2773 33.0264 32.1434 32.1432C33.1088 31.1777 33.7012 30.2101 34.1459 29.0688C34.5734 27.9645 34.8663 26.7039 34.953 24.8554C35.0355 23.0047 35.0572 22.4146 35.0572 17.6999C35.0572 12.9853 35.0355 12.3951 34.953 10.5423C34.8663 8.6959 34.5734 7.43317 34.1459 6.33099C33.7097 5.17289 33.0263 4.12376 32.1434 3.2566C31.2769 2.37286 30.2275 1.68935 29.069 1.25402C27.9625 0.824434 26.6997 0.531532 24.8534 0.446916C23.0005 0.36447 22.4125 0.342773 17.6957 0.342773H17.7022H17.7ZM16.1444 3.4714H17.7022C22.3366 3.4714 22.8855 3.48659 24.7145 3.5712C26.4068 3.64714 27.3267 3.93136 27.9386 4.16785C28.7479 4.48245 29.3272 4.85997 29.9347 5.46747C30.5422 6.07497 30.9175 6.6521 31.2321 7.46354C31.4708 8.07321 31.7528 8.99314 31.8288 10.6855C31.9134 12.5145 31.9307 13.0634 31.9307 17.6956C31.9307 22.3278 31.9134 22.8789 31.8288 24.7079C31.7528 26.4002 31.4686 27.3179 31.2321 27.9298C30.9538 28.6834 30.5097 29.3649 29.9325 29.9237C29.325 30.5312 28.7479 30.9065 27.9364 31.2211C27.3289 31.4598 26.409 31.7418 24.7145 31.82C22.8855 31.9024 22.3366 31.9219 17.7022 31.9219C13.0679 31.9219 12.5168 31.9024 10.6878 31.82C8.99543 31.7418 8.07767 31.4598 7.46583 31.2211C6.71188 30.9432 6.0298 30.4999 5.46976 29.9237C4.8921 29.364 4.44726 28.6819 4.16798 27.9276C3.93148 27.3179 3.64726 26.398 3.57132 24.7057C3.48888 22.8767 3.47152 22.3278 3.47152 17.6912C3.47152 13.0569 3.48888 12.5101 3.57132 10.6811C3.64943 8.9888 3.93148 8.06887 4.17015 7.45703C4.48474 6.64776 4.86226 6.06846 5.46976 5.46096C6.07726 4.85346 6.65439 4.47811 7.46583 4.16351C8.07767 3.92485 8.99543 3.6428 10.6878 3.56469C12.2889 3.49093 12.9095 3.46923 16.1444 3.46706V3.4714ZM26.9666 6.35268C26.6931 6.35268 26.4222 6.40656 26.1695 6.51123C25.9168 6.61591 25.6872 6.76933 25.4938 6.96274C25.3004 7.15615 25.1469 7.38576 25.0423 7.63847C24.9376 7.89117 24.8837 8.16202 24.8837 8.43554C24.8837 8.70907 24.9376 8.97991 25.0423 9.23262C25.1469 9.48532 25.3004 9.71493 25.4938 9.90834C25.6872 10.1018 25.9168 10.2552 26.1695 10.3599C26.4222 10.4645 26.6931 10.5184 26.9666 10.5184C27.519 10.5184 28.0488 10.299 28.4394 9.90834C28.83 9.51773 29.0494 8.98795 29.0494 8.43554C29.0494 7.88313 28.83 7.35335 28.4394 6.96274C28.0488 6.57213 27.519 6.35268 26.9666 6.35268ZM17.7022 8.78702C16.5199 8.76858 15.3457 8.98551 14.2481 9.4252C13.1504 9.86489 12.1512 10.5186 11.3086 11.3481C10.466 12.1777 9.79682 13.1666 9.34006 14.2573C8.8833 15.3479 8.64807 16.5186 8.64807 17.701C8.64807 18.8834 8.8833 20.0541 9.34006 21.1447C9.79682 22.2354 10.466 23.2243 11.3086 24.0539C12.1512 24.8835 13.1504 25.5371 14.2481 25.9768C15.3457 26.4165 16.5199 26.6334 17.7022 26.615C20.0423 26.5785 22.2741 25.6233 23.916 23.9555C25.5579 22.2878 26.4782 20.0413 26.4782 17.701C26.4782 15.3607 25.5579 13.1142 23.916 11.4465C22.2741 9.77874 20.0423 8.82353 17.7022 8.78702ZM17.7022 11.9135C19.2369 11.9135 20.7087 12.5231 21.7938 13.6083C22.879 14.6935 23.4886 16.1653 23.4886 17.6999C23.4886 19.2346 22.879 20.7064 21.7938 21.7915C20.7087 22.8767 19.2369 23.4864 17.7022 23.4864C16.1676 23.4864 14.6957 22.8767 13.6106 21.7915C12.5254 20.7064 11.9158 19.2346 11.9158 17.6999C11.9158 16.1653 12.5254 14.6935 13.6106 13.6083C14.6957 12.5231 16.1676 11.9135 17.7022 11.9135Z"
        fill="#F6F7F8"
      />
    </g>
    <defs>
      <clipPath id="clip0_223_163">
        <rect
          width={34.7143}
          height={34.7143}
          fill="white"
          transform="translate(0.342896 0.342773)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default SvgInstagram;
