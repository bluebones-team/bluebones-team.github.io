import { mdiWechat } from '@mdi/js';
import img from '~/assets/wx_reward.png';
import { Actions, Block, Para, Head } from '~/components/block';
import { t } from '~/ts/util';

export default function Donate() {
  let modalRef!: HTMLDialogElement;
  return (
    <div>
      <Block class="2xl:mx-60">
        <Head>{t('Donate to us')}</Head>
        <Para>
          蓝骨头正在推动脑科学科研工作流的改革，以此促进脑科学的发展。
          <br />
          我们要打造一套高效、协作、开放的科研产品生态，让科研工作者把时间更多地花在思考上。
          <br />
          为了实现这个目标，需要我们年轻一代的共同努力。
          <b>你愿意支持我们吗？</b>
        </Para>
        <Para>
          我们是非营利性组织，接受捐助是我们当前唯一的收入来源。
          <br />
          我们承诺，这些钱将全部用于：服务器、域名、推广。
        </Para>
        <Para>目前您可以通过以下方式捐助：</Para>
        <Actions
          items={[
            {
              text: t('WeChat'),
              icon: mdiWechat,
              onClick: () => modalRef.showModal(),
            },
            {
              type: 'link',
              text: t('AFDIAN'),
              path: 'https://afdian.com/a/bluebones',
              icon: 'https://static.afdiancdn.com/static/img/logo/logo.png',
            },
          ]}
        />
        <dialog ref={modalRef} class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <form method="dialog">
              <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            {/* <h3 class="text-lg font-bold">Thanks</h3> */}
            <p class="py-4">
              <img src={img} alt="微信赞助码" />
            </p>
          </div>
        </dialog>
      </Block>
    </div>
  );
}
