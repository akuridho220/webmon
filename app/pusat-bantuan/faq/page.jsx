import AccordionFaq from './components/AccordionFaq';
import Layout from '@/app/layout/layout';

export default function Faq() {
    const faqs = [
        {
            title: 'Apa saja konten yang terdapat pada Web Monitoring PKL D-IV 63?',
            text: 'Untuk setiap lokus, terdapat Daftar Listing, Daftar Sampel, Daftar Pertim, Progres Per Wilayah, Progres Per Tim, serta Monitoring PPL.',
            active: false
        },
        {
            title: 'Siapa saja yang memiliki akses Web Monitoring?',
            text: 'Yang memiliki akses Web Monitoring adalah seluruh dosen yang tergabung dalam struktur PKL D-IV 63, Intama dan Korwil masing-masing lokus, serta Tim Monotoring Server.',
            active: false
        },
        {
            title: 'Apakah data responden yang sensitif ikut ditampilkan?',
            text: 'Data responden telah difilter, sehingga hanya intama dan korwil bersangkutan, serta korlap dan dosen yang dapat melihat data tersebut untuk keperluan lapangan.',
            active: false
        },
        {
            title: 'Bagaimana cara melihat lokasi PPL?',
            text: 'Silakan akses menu Lokasi PPL. Lokasi PPL dapat ditampilkan secara keseluruhan maupun berdasarkan lokus.',
            active: false
        }
    ]
    return (
        <>
            <Layout>
                <div className='flex flex-col w-3/4 rounded-xl bg-[#d93f57] mt-10 p-6'>
                    <div className='flex text-white px-4'>
                        <p className='pr-4'>FAQ</p>
                        <span>|</span>
                        <p className='pl-4'>Pusat Bantuan - FAQ</p>
                    </div>
                </div>
                <div className='flex flex-col w-3/4 rounded-xl bg-[#d93f57] mt-10 p-6'>
                    <div className='flex flex-col text-white items-center'>
                        <div className='flex flex-col items-center'>
                            <p className='font-bold text-xl'>Frequently Asked Question</p>
                            <p className='text-sm'>Pertanyaan seputar Web Monitoring</p>
                        </div>
                        <div className='mt-5 text-black font-base'>
                            { faqs.map((faq, index) => (
                                <AccordionFaq 
                                    key={index}
                                    title={faq.title}
                                    id={`faqs-${index}`}
                                    active={faq.active} 
                                >{faq.text}</AccordionFaq>
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
