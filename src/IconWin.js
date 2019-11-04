import React from 'react';
import { View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

type Props = {
  width: string,
  height: string,
};
const IconWin = ({ size, color }: Props) => (
  <View style={{ height: size, width: size }}>
    <Svg width="100%" height="100%" viewBox="0 0 26.458 33.0725">
      <G transform="translate(0 -270.54)">
        <Path
          fill={color}
          d="m7.723 271.36-4.6715 2.295 4.2313 8.6098c0.45302 0.0478 0.88009 0.0968 1.2439-0.10232 2.442e-4 -2.7e-4 7.552e-4 -3.9e-4 0.00103-5.2e-4 0.025712-0.0141 0.0509-0.0294 0.075964-0.046 2.44e-4 -2.7e-4 7.551e-4 -3e-4 0.00103-5.1e-4 0.025336-0.0169 0.050291-0.0351 0.074931-0.0548 0.41388-0.3311 0.45299-0.84357 0.5178-1.3911 0.032404-0.27378 0.070107-0.55147 0.18655-0.80357 0.11644-0.2521 0.32384-0.47339 0.64854-0.59583 0.03851-0.0146 0.07687-0.0263 0.11472-0.0367 0.01021-2e-3 0.01982-5e-3 0.02997-7e-3 0.0278-7e-3 0.05582-0.0126 0.0832-0.0176 0.0106-2e-3 0.02099-3e-3 0.03152-5e-3 0.02848-4e-3 0.05679-7e-3 0.08475-9e-3 0.0073-1e-3 0.0144-1e-3 0.0217-2e-3 0.03078-1e-3 0.0614-2e-3 0.09147-1e-3 0.0055 3.2e-4 0.01104 2.6e-4 0.01654 5.2e-4 0.03361 2e-3 0.06659 4e-3 0.09922 9e-3 0.0015 2.7e-4 0.0032 3.1e-4 0.0047 5.2e-4 0.06865 0.01 0.13528 0.0253 0.19895 0.047 0.0014 1e-3 0.0027 2e-3 0.0041 2e-3 0.01128 4e-3 0.02196 8e-3 0.03307 0.0124 0.01772 7e-3 0.0359 0.0142 0.05323 0.0212 0.0046 3e-3 0.0094 4e-3 0.01395 6e-3 0.01361 6e-3 0.02693 0.0136 0.04031 0.0196 0.01089 5e-3 0.02182 0.01 0.03256 0.0155 0.01771 9e-3 0.03489 0.0184 0.05219 0.0284 0.01 6e-3 0.02007 0.0111 0.02997 0.017 0.01785 0.0104 0.03525 0.0209 0.05271 0.032 0.0081 5e-3 0.01619 0.01 0.02429 0.016 0.04493 0.0295 0.08893 0.0604 0.13178 0.093 0.04761 0.0363 0.0943 0.074 0.14004 0.11265 0.0089 7e-3 0.01755 0.0147 0.02636 0.0227 0.20228 0.17144 0.39659 0.34364 0.59428 0.49455zm11.013 0-3.7626 7.6574c0.05833-0.0181 0.11868-0.0333 0.18138-0.0413 0.08412-0.011 0.17225-0.0121 0.26355-3e-3 0.0197 1e-3 0.03988 4e-3 0.05995 7e-3 0.01352 2e-3 0.02665 4e-3 0.04031 6e-3 0.03561 7e-3 0.07182 0.0137 0.10852 0.0238 0.25099 0.0689 0.44103 0.19985 0.57929 0.36225 0.04606 0.0541 0.08663 0.11157 0.12144 0.17157 0.01742 0.0301 0.0334 0.0605 0.04858 0.0915v5.2e-4c0.10619 0.21674 0.16093 0.45454 0.21136 0.6904 0.02883 0.1348 0.0561 0.26741 0.08733 0.39532v5.2e-4c0.03903 0.15985 0.08489 0.31211 0.14883 0.45113 0.08955 0.19462 0.21508 0.36351 0.40876 0.49093 0.0254 0.0167 0.05071 0.0314 0.07648 0.0455 0.0062 4e-3 0.0124 7e-3 0.0186 0.0103 0.02251 0.0118 0.04543 0.0226 0.06821 0.0326 3e-3 2e-3 0.0058 2e-3 0.0088 4e-3 0.1349 0.057 0.27501 0.0818 0.4191 0.0879 0.01225 2.7e-4 0.02436 3.1e-4 0.03669 5.2e-4 0.08183 1e-3 0.16507-3e-3 0.2496-0.0124 0.0085-1e-3 0.01724-2e-3 0.02584-3e-3 0.18738-0.022 0.38105-0.0632 0.58033-0.10283 0.25121-0.05 0.50661-0.0959 0.76274-0.076l3.9279-7.9959zm-3.4603 7.9499v5.2e-4c-0.0261 0-0.05118 3e-3 -0.07596 6e-3 -0.09915 0.0134-0.18904 0.0484-0.27905 0.0987-0.06522 0.0365-0.12938 0.0825-0.19379 0.13591-0.0056 4e-3 -0.01135 9e-3 -0.01705 0.0145-0.10773 0.0914-0.21514 0.20245-0.32608 0.32246-0.36611 0.39605-0.78439 0.90004-1.4764 0.93224-0.18587 9e-3 -0.35454-0.019-0.51056-0.0703a0.17352 0.17352 0 0 1-0.0026-1e-3c-0.0028-1e-3 -0.0054-2e-3 -0.0083-3e-3 -0.07103-0.0239-0.13934-0.0525-0.20516-0.0853-0.02075-0.0103-0.04178-0.0205-0.06201-0.0315-0.0031-3e-3 -0.0063-4e-3 -0.0093-6e-3 -0.29973-0.16422-0.54299-0.40107-0.77153-0.60772-0.10405-0.0931-0.20576-0.1797-0.30541-0.2527-0.02186-0.0159-0.04337-0.0314-0.06511-0.046-0.01708-0.0114-0.03415-0.0225-0.05116-0.0331-5.4e-4 -2.7e-4 -0.0011-7.6e-4 -0.0016-1e-3 -0.02005-0.0124-0.03996-0.0236-0.05994-0.0346-0.0064-3e-3 -0.01272-7e-3 -0.01912-0.0103-0.01544-8e-3 -0.03109-0.0157-0.04651-0.0227-0.0075-3e-3 -0.01472-7e-3 -0.02222-0.0103-0.01234-5e-3 -0.02489-0.01-0.03721-0.015-0.01071-4e-3 -0.02134-8e-3 -0.03204-0.0124-0.06095-0.0208-0.12234-0.0338-0.18604-0.0398-5.2e-4 -7e-5 -5.47e-4 4e-5 -1e-3 0-0.01834-1e-3 -0.03698-2e-3 -0.05581-2e-3 -6e-3 0-0.0125-2e-4 -0.0186 0-0.01609 1e-3 -0.03201 1e-3 -0.04858 3e-3 -0.0093 1e-3 -0.01892 1e-3 -0.02842 3e-3 -0.01422 2e-3 -0.02826 4e-3 -0.04289 7e-3 -0.0136 3e-3 -0.02789 7e-3 -0.04186 0.0103-0.01235 3e-3 -0.02454 5e-3 -0.03721 9e-3 -0.02673 8e-3 -0.05381 0.0167-0.08216 0.0274-0.24737 0.0933-0.3693 0.22927-0.45579 0.41651-0.08649 0.18724-0.1254 0.43086-0.1571 0.69866-0.059432 0.50213-0.099816 1.1076-0.55035 1.5379-0.030039 0.0288-0.061794 0.0567-0.095601 0.0837-0.021552 0.0172-0.043749 0.0319-0.065629 0.0475-0.012424 9e-3 -0.024679 0.0194-0.037207 0.0274-4.001e-4 2.6e-4 -6.16e-4 7.6e-4 -0.00103 1e-3 -0.034529 0.0229-0.069194 0.0438-0.10439 0.063-0.02156 0.0118-0.043853 0.0216-0.065629 0.032-0.013448 6e-3 -0.026263 0.0136-0.039791 0.0196-0.030158 0.0134-0.060979 0.0247-0.091467 0.0356-0.00573 1e-3 -0.011293 4e-3 -0.017053 6e-3 -0.034412 0.0119-0.069142 0.0225-0.10387 0.0315-0.00184 1e-3 -0.00333 2e-3 -0.00517 2e-3 -0.030745 8e-3 -0.061581 0.0152-0.092501 0.0212-0.00639 1e-3 -0.01272 2e-3 -0.01912 4e-3 -0.034049 6e-3 -0.068143 0.011-0.10232 0.016-0.00232 1e-5 -0.00491 7.7e-4 -0.00723 1e-3 -0.33983 0.0435-0.68325-5e-3 -0.99012-0.0367a0.17352 0.17352 0 0 1-0.0031-1e-3c-0.25945-0.0264-0.49802-0.04-0.69401 2e-3 -0.20166 0.0433-0.36165 0.1326-0.50695 0.35347-0.1453 0.22085-0.16411 0.40281-0.12402 0.60513 0.040089 0.20231 0.15194 0.42203 0.2837 0.65732 0.26353 0.47057 0.61425 1.0233 0.43098 1.6914-0.18327 0.66808-0.76676 0.96535-1.2335 1.2356-0.23338 0.13512-0.4421 0.2671-0.57981 0.42064-0.13771 0.15354-0.21433 0.31987-0.20205 0.58395 0.012271 0.26408 0.10445 0.42213 0.2558 0.56224 0.15135 0.14012 0.37057 0.25194 0.61547 0.36483 0.4898 0.22581 1.0987 0.46698 1.3431 1.1152 0.24442 0.6482-0.053567 1.2315-0.27233 1.7244-0.10938 0.24649-0.20001 0.47594-0.22118 0.6811-0.021159 0.20516 0.01417 0.38475 0.17932 0.59118 0.16515 0.20641 0.33263 0.27997 0.53743 0.30437 0.2048 0.0243 0.44865-0.0141 0.71313-0.0667 0.52898-0.10521 1.1628-0.26758 1.7415 0.11317 0.57874 0.38074 0.68097 1.0275 0.79375 1.5549 0.05639 0.26371 0.11718 0.50268 0.22066 0.6811 0.10347 0.17841 0.23805 0.3032 0.49299 0.3731 0.25495 0.07 0.43389 0.0314 0.61392-0.0692 0.18002-0.10065 0.35438-0.27481 0.53744-0.47283 0.36611-0.39604 0.78387-0.90056 1.4759-0.93276 0.69201-0.0321 1.1542 0.43128 1.5555 0.79168 0.20062 0.1802 0.39071 0.33766 0.57929 0.42116 0.18858 0.0836 0.37017 0.10519 0.61753 0.0119 0.24736-0.0933 0.36981-0.22979 0.4563-0.41703s0.12488-0.43035 0.15658-0.69815c0.0634-0.5356 0.105-1.1894 0.64596-1.6221 0.54095-0.43276 1.1875-0.32959 1.7239-0.27389 0.26823 0.0279 0.51406 0.0438 0.71572 5.2e-4 0.20166-0.0433 0.36165-0.13262 0.50694-0.35347 0.1453-0.22086 0.16411-0.40333 0.12402-0.60565-0.04009-0.20231-0.15194-0.42203-0.2837-0.65732-0.26353-0.47057-0.61425-1.0233-0.43098-1.6914 0.18327-0.66807 0.76676-0.96534 1.2335-1.2356 0.23338-0.13513 0.4421-0.26659 0.57981-0.42013 0.13771-0.15354 0.21432-0.31987 0.20206-0.58395s-0.10445-0.42214-0.2558-0.56224c-0.15135-0.14012-0.37057-0.25246-0.61547-0.36535-0.4898-0.22581-1.0981-0.46698-1.3426-1.1152-0.24442-0.6482 0.05305-1.2315 0.27182-1.7244 0.10939-0.24649 0.20001-0.47542 0.22118-0.68058 0.02116-0.20516-0.01417-0.38526-0.17932-0.59169-0.14566-0.18207-0.29335-0.26062-0.46664-0.29352a0.17352 0.17352 0 0 1-0.01757-2e-3c-0.30655-0.0543-0.70565 0.0552-1.1395 0.13126-0.01162 3e-3 -0.02396 4e-3 -0.03566 6e-3 -0.03925 7e-3 -0.07852 0.0126-0.11834 0.0186-0.01075 2e-3 -0.02175 2e-3 -0.03256 4e-3 -0.04345 5e-3 -0.0873 0.0105-0.13126 0.0145-0.0079 0-0.01535 1e-3 -0.02325 2e-3 -0.13702 0.0113-0.27592 0.0112-0.41496-7e-3 -0.0056 0-0.01145-1e-3 -0.01705-2e-3 -0.0255-4e-3 -0.051-7e-3 -0.07648-0.0124-0.0047-1e-3 -0.0093-2e-3 -0.01395-3e-3 -0.07143-0.0142-0.14254-0.034-0.21342-0.06-0.01752-6e-3 -0.03527-0.0131-0.05271-0.0202-0.01412-6e-3 -0.02829-0.0126-0.04237-0.0186-0.02099-0.01-0.04167-0.0198-0.06253-0.0305-0.01197-6e-3 -0.02424-0.0126-0.03617-0.0186-0.03281-0.018-0.06525-0.037-0.09767-0.0584-0.57874-0.38074-0.68097-1.0275-0.79375-1.555-0.05639-0.2637-0.11718-0.50268-0.22066-0.68109-0.10347-0.17842-0.23804-0.30269-0.49299-0.37259-0.02887-8e-3 -0.05618-0.0131-0.0832-0.0191-0.0068-2e-3 -0.01397-3e-3 -0.02067-4e-3 -0.02333-3e-3 -0.04608-7e-3 -0.06821-9e-3 -0.0028-2e-5 -0.0055-2.7e-4 -0.0083-5.2e-4 -0.02683-2e-3 -0.05324-3e-3 -0.07855-2e-3zm-2.1177 2.3668c3.3517 0 6.073 2.7203 6.073 6.072 0 3.3517-2.7214 6.073-6.073 6.073-3.3517 0-6.072-2.7214-6.072-6.073 0-3.3516 2.7203-6.072 6.072-6.072zm0 0.34675c-3.1641 0-5.7252 2.5611-5.7252 5.7252 0 3.1641 2.5611 5.7252 5.7252 5.7252 3.1641 0 5.7257-2.5611 5.7257-5.7252 0-3.1641-2.5616-5.7252-5.7257-5.7252zm-0.0078 1.388a0.17352 0.17352 0 0 1 0.16692 0.10387l0.9896 2.2443 2.4391-0.2651a0.17352 0.17352 0 0 1 0.15865 0.2744l-1.449 1.9797 1.449 1.9797a0.17352 0.17352 0 0 1-0.15865 0.27492l-2.4391-0.2651-0.9896 2.2448a0.17352 0.17352 0 0 1-0.31729 0l-0.9896-2.2448-2.4391 0.2651a0.17352 0.17352 0 0 1-0.15911-0.27492l1.4495-1.9797-1.4495-1.9797a0.17352 0.17352 0 0 1 0.15916-0.2744l2.4391 0.2651 0.9896-2.2443a0.17352 0.17352 0 0 1 0.15038-0.10387zm0.0083 0.60306-0.88263 2.0009a0.17352 0.17352 0 0 1-0.17725 0.10283l-2.1735-0.23616 1.2914 1.7642a0.17352 0.17352 0 0 1 0 0.20464l-1.2919 1.7653 2.174-0.23668a0.17352 0.17352 0 0 1 0.17725 0.10232l0.88263 2.0014 0.88212-2.0014a0.17352 0.17352 0 0 1 0.17725-0.10232l2.1745 0.23668-1.2924-1.7653a0.17352 0.17352 0 0 1 0-0.20464l1.2919-1.7642-2.174 0.23616a0.17352 0.17352 0 0 1-0.17725-0.10283z"
        />
      </G>
    </Svg>
  </View>
);

export default IconWin;