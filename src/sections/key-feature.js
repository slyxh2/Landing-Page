/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import FeatureCard from 'components/feature-card';

import Website from 'assets/key-feature/website.svg';
import Infrastructure from 'assets/key-feature/infrastructure.svg';
import Education from 'assets/key-feature/education.svg';
import Support from 'assets/key-feature/support.svg';


const data = [
  {
    id: 1,
    imgSrc: Website,
    altText: 'Website',
    title: 'Website - Phần mềm',
    text:
      'Mang đến các sản phẩm chuyên nghiệp, chất lượng với công nghệ mới nhất.',
  },
  {
    id: 2,
    imgSrc: Infrastructure,
    altText: 'Infrastructure',
    title: 'Thi công - Bảo trì',
    text:
      'Đảm bảo tiêu chuẩn thiết kế hệ thống quốc tế, hiệu quả với chi phí đầu tư thấp nhất.',
  },
  {
    id: 3,
    imgSrc: Education,
    altText: 'Education',
    title: 'Đào tạo',
    text:
      'Liên kết các đơn vị uy tín, thực hiện đào tạo đảm bảo phát triển nguồn nhân lực.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Support',
    title: 'Tư vấn - Giải pháp',
    text:
      'Tư vấn, cung cấp giải pháp cho các vấn đề An toàn bảo mật, Công nghệ thông tin.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader 
          slogan="Services"
          title="Dịch vụ chúng tôi cung cấp"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
