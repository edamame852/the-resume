import { memo } from 'react';

import Icon from './Icon';

const DownloadIcon = memo(({ size = 128, color = 'currentColor', input, ...props }) => (
    <Icon {...props} viewBox="0 0 10 8" width="90">
        <path
            d="M 189.6759 25 H 32.3226 C 12.8457 25 -3 40.8465 -3 60.3234 V 117.6766 C -3 137.154 12.8457 153 32.3226 153 H 189.6759 C 209.154 153 225 137.154 225 117.6766 V 60.3234 C 225.001 40.8465 209.154 25 189.6759 25 Z M 213.644 117.6766 C 213.644 130.892 202.892 141.643 189.6766 141.643 H 32.3226 C 19.1079 141.644 8.3568 130.892 8.3568 117.6766 V 60.3234 C 8.3568 47.1086 19.1079 36.3568 32.3226 36.3568 H 189 C 202.891 36.3568 213.643 47.1086 213.643 60.3234 V 117.6766 H 213.644 Z M 174 85 H 167 L 178 97 L 188 85 H 181 L 181 65 H 174 Z M 157 90 h 4 V 104 H 196 V 91 H 200 V 108 H 157 Z"
            fill="currentColor"
            transform={`scale(${size / 128})`}
        />
        <text x="35%" y="54%" textAnchor="middle" fontSize={`${size / 3.5}px`} fill="currentColor">
            {input}
        </text>
    </Icon>
));

DownloadIcon.displayName = "DownloadIcon"
export default DownloadIcon;
