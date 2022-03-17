<template>
  <div class="home-project">
    <h2>项目</h2>
    <div class="content">
      <div
        class="column col-4 space10"
        v-for="(pro, index) in projects"
        :key="index"
      >
        <a class="project-item">
          <div class="imgs" @click="heandelPreviewImage(index)">
            <img :src="pro.images[0]" :alt="pro.title" />
          </div>
          <!-- 资料 -->
          <div class="info">
            <h4>{{ pro.title }}</h4>

            <p class="tags">
              <span v-for="tag in pro.tags" :key="tag">{{ tag }}</span>
            </p>

            <p class="desc">{{ pro.desc }}</p>

            <p class="links">
              <IcontFont name="icon-link" size="15px" />
              <a
                target="_blank"
                v-for="({ link, label }, index) in pro.links"
                :key="index"
                :href="link"
                >{{ label }}</a
              >
            </p>
          </div>
        </a>
      </div>
    </div>

    <ImagePreview ref="image-preview" :urls="previewUrls" />
  </div>
</template>

<script>
export default {
  data() {
    const projectImgs = '/assets/img/project'
    return {
      projects: [
        {
          title: '扫码点餐',
          images: [
            `${projectImgs}/saomadiancan/h01.png`,
            `${projectImgs}/saomadiancan/h02.png`,
            `${projectImgs}/saomadiancan/h03.png`,
          ],
          desc: '',
          tags: ['php', 'javascript', 'css', 'html'],
          links: [
            // LaoWangMianGuan 123456
            {
              label: '商户后台',
              link: 'http://diancan.heartverse.net/admin/login/index.html',
            },
          ],
          repository: [],
        },
        {
          title: '指南针监护网站',
          images: [
            `${projectImgs}/tutorship/01.png`,
            `${projectImgs}/tutorship/02.png`,
            `${projectImgs}/tutorship/03.png`,
          ],
          desc: '',
          tags: ['javascript', 'css', 'html', 'php'],
          links: [
            // LaoWangMianGuan 123456
            {
              label: '家长端',
              link: 'http://compass.linx.cn/Home/Login/index',
            },
            {
              label: '监护老师管理',
              link: 'http://compass.linx.cn/Admin/login/index.html',
            },
            {
              label: '系统管理',
              link: 'http://compass.linx.cn/Admin/login/admin.html',
            },
          ],
          repository: [],
        },
        {
          title: 'CodeStore-源码商城',
          images: [
            `${projectImgs}/codestore/01.png`,
            `${projectImgs}/codestore/02.png`,
            `${projectImgs}/codestore/03.png`,
            `${projectImgs}/codestore/04.png`,
          ],
          desc: '',
          tags: ['Vue', 'javascript'],
          links: [
            // LaoWangMianGuan 123456
            {
              label: 'PC浏览器',
              link: 'https://sxrenwu.heartverse.net/',
            },
            {
              label: '手机版',
              link: 'http://csm.heartverse.net/',
            },
          ],
          repository: [],
        },
      ],

      // 当前预览的项目索引
      imagePreviewIndex: 0,
    }
  },

  computed: {
    // 预览图片 Url 数组
    previewUrls() {
      return this.projects[this.imagePreviewIndex].images
    },
  },

  methods: {
    // 显示图片预览
    heandelPreviewImage(index) {
      this.imagePreviewIndex = index
      this.$refs['image-preview'].showPreview()
    },
  },
}
</script>

<style lang="stylus">
.home-project {
  h2 {
    padding-top: 1rem;
  }

  .project-item {
    color: #333;
    display: block;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 4px 4px 6px 0 #2121211c;
    transition: all 0.2s ease-out;
    transition-delay: 0.1s;

    &:hover {
      transform: translate(0, -5px);
      box-shadow: 0 4px 8px 0 #33333324;

      h4 {
        color: $accentColor;
      }
    }

    h4 {
      font-weight: 400;
      font-size: 1.2rem;
    }

    .info {
      padding: 0 10px;
    }

    h4, .tags, .desc {
      margin: 5px 0;
    }

    .imgs {
      width: 100%;
      height: 160px;
      position: relative;
      overflow: hidden;

      &::before {
        content: '查看图片';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        color: #d0d0d0;
        background: #0000006e;
        text-align: center;
        line-height: 160px;
        opacity: 0;
        cursor: pointer;
        transition: all 0.2s;
      }

      &:hover::before {
        color: #fff;
        opacity: 1;
      }
    }

    .imgs img {
      width: 100%;
      object-fit: fill;
    }

    .tags span {
      color: #8cb3c5;
      font-size: 13px;
      margin-right: 5px;
    }

    .links a {
      color: #8cb3c5;
      font-size: 13px;
      margin-right: 5px;
    }

    .desc {
      font-size: 14px;
      overflow: hidden;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1; /* 最多允许两行 */
      -webkit-box-orient: vertical;
    }
  }
}
</style>
