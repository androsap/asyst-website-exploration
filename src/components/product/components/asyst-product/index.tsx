import Grid from '@mui/material/Grid'
import './index.scss'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { AllProductModel } from 'models/product/allproduct.model';
import { CardOverviewModel } from 'models/product/cardoverview.model';
import { Children } from 'react';

interface AsystProductProps {
    product: AllProductModel[];
    card: CardOverviewModel[]
}

const AsystProductComponent: React.FC<AsystProductProps> = ({ product, card }) => {

    return (
        <>
            <Grid sx={{ display: 'flex', flexDirection: 'row', gap: '159px', paddingBottom: '210px' }}>
                <Grid item xs={2}>
                    {product?.length > 0 && Children.toArray(product.map((item, index) =>
                        <Box key={index} className="asyst-product" sx={{ display: 'flex', flexDirection: 'column', gap: '27px' }}>
                            <Typography variant='h1'>{item.title_id}</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                                <Typography variant='h2' sx={{ width: '486px' }}>{item.subtitle_id}</Typography>
                                <Typography variant='h3' sx={{ width: '486px', height: '100px', flexShrink: '0' }}>{item.description_id}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Grid>
                <Grid item xs={10} width='80%'>
                    {card?.length > 0 && Children.toArray(card.map(item =>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
                                <Box className="saliman" sx={{ display: 'flex', flexDirection: 'column', gap: '23px' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center' }}>
                                        <img className='img-products' src={item.image1} alt="" />
                                        <Typography variant='h1'>{item.title_id}</Typography>
                                    </Box>
                                    <Typography variant='h2'>{item.description_id}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </>
    );
}

export default AsystProductComponent;
